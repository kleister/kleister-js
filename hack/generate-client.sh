#!/usr/bin/env bash
set -eo pipefail

if [ -L "${0}" ]
then
    ROOT=$(realpath -e "$(dirname "$(readlink -e "${0}")")/..")
else
    ROOT=$(realpath -e "$(dirname "${0}")/..")
fi

if ! hash openapi-generator-cli 2>/dev/null; then
    echo "missing openapi-generator-cli executable"
    exit 1
fi

SPEC_VERSION="1.0.0-alpha1"
SPEC_DOWNLOAD=${SPEC:-https://dl.kleister.eu/openapi/${SPEC_VERSION}.yaml}

pushd "${ROOT}" >/dev/null
    echo "> deleting apis and models"
    rm -rf api model openapitools.json

    export TS_POST_PROCESS_FILE="npx prettier -w"

    openapi-generator-cli \
        generate \
        -c openapi.yml \
        -g typescript-axios \
        --git-repo-id kleister-js \
        --git-user-id kleister \
        --http-user-agent "kleister-js/${SPEC_VERSION}" \
        -i "${SPEC_DOWNLOAD}" \
        -o . \
        -t hack/openapi/templates \
        --strict-spec true
popd >/dev/null
