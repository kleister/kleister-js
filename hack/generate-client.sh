#!/usr/bin/env bash
set -eo pipefail

if [ -L $0 ]
then
    ROOT=$(realpath -e $(dirname $(readlink -e $0))/..)
else
    ROOT=$(realpath -e $(dirname $0)/..)
fi

SPEC=${SPEC:-https://dl.kleister.eu/openapi/1.0.0-alpha1.yml}

docker run --rm \
	-v ${ROOT}:/generate \
	openapitools/openapi-generator-cli:v5.4.0 \
	generate \
	-c /generate/openapi.yml \
	-g typescript-axios \
	--git-repo-id kleister-js \
	--git-user-id kleister \
	--http-user-agent kleister-js/1.0.0-alpha1 \
	-i ${SPEC} \
	-o /generate \
	-t /generate/hack/openapi/templates \
	--strict-spec true

pushd ${ROOT}
	yarn install
	yarn format
popd
