/* tslint:disable */
/* eslint-disable */
/**
 * Kleister OpenAPI
 * API definition for Kleister, manage mod packs for Minecraft
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 * Contact: kleister@webhippie.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Configuration } from "../configuration";
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from "axios";
import globalAxios from "axios";
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from "url";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  type RequestArgs,
  BaseAPI,
  RequiredError,
  operationServerMap,
} from "../base";
// @ts-ignore
import type { AttachMinecraftToBuildRequest } from "../model";
// @ts-ignore
import type { ListNeoforgeBuilds200Response } from "../model";
// @ts-ignore
import type { ListNeoforges200Response } from "../model";
// @ts-ignore
import type { Notification } from "../model";
/**
 * NeoforgeApi - axios parameter creator
 * @export
 */
export const NeoforgeApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Attach a build to a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The neoforge build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    attachNeoforgeToBuild: async (
      neoforgeId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'neoforgeId' is not null or undefined
      assertParamExists("attachNeoforgeToBuild", "neoforgeId", neoforgeId);
      // verify required parameter 'attachMinecraftToBuildRequest' is not null or undefined
      assertParamExists(
        "attachNeoforgeToBuild",
        "attachMinecraftToBuildRequest",
        attachMinecraftToBuildRequest,
      );
      const localVarPath = `/neoforge/{neoforge_id}/builds`.replace(
        `{${"neoforge_id"}}`,
        encodeURIComponent(String(neoforgeId)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        attachMinecraftToBuildRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Unlink a build from a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The neoforge build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNeoforgeFromBuild: async (
      neoforgeId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'neoforgeId' is not null or undefined
      assertParamExists("deleteNeoforgeFromBuild", "neoforgeId", neoforgeId);
      // verify required parameter 'attachMinecraftToBuildRequest' is not null or undefined
      assertParamExists(
        "deleteNeoforgeFromBuild",
        "attachMinecraftToBuildRequest",
        attachMinecraftToBuildRequest,
      );
      const localVarPath = `/neoforge/{neoforge_id}/builds`.replace(
        `{${"neoforge_id"}}`,
        encodeURIComponent(String(neoforgeId)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        attachMinecraftToBuildRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Fetch the builds attached to a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {string} [search] Search query
     * @param {string} [sort] Sorting column
     * @param {ListNeoforgeBuildsOrderEnum} [order] Sorting order
     * @param {number} [limit] Paging limit
     * @param {number} [offset] Paging offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeoforgeBuilds: async (
      neoforgeId: string,
      search?: string,
      sort?: string,
      order?: ListNeoforgeBuildsOrderEnum,
      limit?: number,
      offset?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'neoforgeId' is not null or undefined
      assertParamExists("listNeoforgeBuilds", "neoforgeId", neoforgeId);
      const localVarPath = `/neoforge/{neoforge_id}/builds`.replace(
        `{${"neoforge_id"}}`,
        encodeURIComponent(String(neoforgeId)),
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (search !== undefined) {
        localVarQueryParameter["search"] = search;
      }

      if (sort !== undefined) {
        localVarQueryParameter["sort"] = sort;
      }

      if (order !== undefined) {
        localVarQueryParameter["order"] = order;
      }

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (offset !== undefined) {
        localVarQueryParameter["offset"] = offset;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Fetch the available Neoforge versions
     * @param {string} [search] Search query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeoforges: async (
      search?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/neoforge`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      if (search !== undefined) {
        localVarQueryParameter["search"] = search;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update the available Neoforge versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNeoforge: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/neoforge`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Basic required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      // authentication Header required
      await setApiKeyToObject(
        localVarHeaderParameter,
        "X-API-Key",
        configuration,
      );

      // authentication Bearer required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * NeoforgeApi - functional programming interface
 * @export
 */
export const NeoforgeApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = NeoforgeApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Attach a build to a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The neoforge build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async attachNeoforgeToBuild(
      neoforgeId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.attachNeoforgeToBuild(
          neoforgeId,
          attachMinecraftToBuildRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["NeoforgeApi.attachNeoforgeToBuild"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Unlink a build from a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The neoforge build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteNeoforgeFromBuild(
      neoforgeId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteNeoforgeFromBuild(
          neoforgeId,
          attachMinecraftToBuildRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["NeoforgeApi.deleteNeoforgeFromBuild"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Fetch the builds attached to a Neoforge version
     * @param {string} neoforgeId A neoforge identifier or slug
     * @param {string} [search] Search query
     * @param {string} [sort] Sorting column
     * @param {ListNeoforgeBuildsOrderEnum} [order] Sorting order
     * @param {number} [limit] Paging limit
     * @param {number} [offset] Paging offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNeoforgeBuilds(
      neoforgeId: string,
      search?: string,
      sort?: string,
      order?: ListNeoforgeBuildsOrderEnum,
      limit?: number,
      offset?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ListNeoforgeBuilds200Response>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listNeoforgeBuilds(
          neoforgeId,
          search,
          sort,
          order,
          limit,
          offset,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["NeoforgeApi.listNeoforgeBuilds"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Fetch the available Neoforge versions
     * @param {string} [search] Search query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listNeoforges(
      search?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ListNeoforges200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listNeoforges(
        search,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["NeoforgeApi.listNeoforges"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
    /**
     *
     * @summary Update the available Neoforge versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateNeoforge(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateNeoforge(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["NeoforgeApi.updateNeoforge"]?.[
          localVarOperationServerIndex
        ]?.url;
      return (axios, basePath) =>
        createRequestFunction(
          localVarAxiosArgs,
          globalAxios,
          BASE_PATH,
          configuration,
        )(axios, localVarOperationServerBasePath || basePath);
    },
  };
};

/**
 * NeoforgeApi - factory interface
 * @export
 */
export const NeoforgeApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = NeoforgeApiFp(configuration);
  return {
    /**
     *
     * @summary Attach a build to a Neoforge version
     * @param {NeoforgeApiAttachNeoforgeToBuildRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    attachNeoforgeToBuild(
      requestParameters: NeoforgeApiAttachNeoforgeToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .attachNeoforgeToBuild(
          requestParameters.neoforgeId,
          requestParameters.attachMinecraftToBuildRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Unlink a build from a Neoforge version
     * @param {NeoforgeApiDeleteNeoforgeFromBuildRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteNeoforgeFromBuild(
      requestParameters: NeoforgeApiDeleteNeoforgeFromBuildRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .deleteNeoforgeFromBuild(
          requestParameters.neoforgeId,
          requestParameters.attachMinecraftToBuildRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch the builds attached to a Neoforge version
     * @param {NeoforgeApiListNeoforgeBuildsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeoforgeBuilds(
      requestParameters: NeoforgeApiListNeoforgeBuildsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListNeoforgeBuilds200Response> {
      return localVarFp
        .listNeoforgeBuilds(
          requestParameters.neoforgeId,
          requestParameters.search,
          requestParameters.sort,
          requestParameters.order,
          requestParameters.limit,
          requestParameters.offset,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch the available Neoforge versions
     * @param {NeoforgeApiListNeoforgesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listNeoforges(
      requestParameters: NeoforgeApiListNeoforgesRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListNeoforges200Response> {
      return localVarFp
        .listNeoforges(requestParameters.search, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update the available Neoforge versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateNeoforge(
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .updateNeoforge(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for attachNeoforgeToBuild operation in NeoforgeApi.
 * @export
 * @interface NeoforgeApiAttachNeoforgeToBuildRequest
 */
export interface NeoforgeApiAttachNeoforgeToBuildRequest {
  /**
   * A neoforge identifier or slug
   * @type {string}
   * @memberof NeoforgeApiAttachNeoforgeToBuild
   */
  readonly neoforgeId: string;

  /**
   * The neoforge build data to create or update
   * @type {AttachMinecraftToBuildRequest}
   * @memberof NeoforgeApiAttachNeoforgeToBuild
   */
  readonly attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest;
}

/**
 * Request parameters for deleteNeoforgeFromBuild operation in NeoforgeApi.
 * @export
 * @interface NeoforgeApiDeleteNeoforgeFromBuildRequest
 */
export interface NeoforgeApiDeleteNeoforgeFromBuildRequest {
  /**
   * A neoforge identifier or slug
   * @type {string}
   * @memberof NeoforgeApiDeleteNeoforgeFromBuild
   */
  readonly neoforgeId: string;

  /**
   * The neoforge build data to create or update
   * @type {AttachMinecraftToBuildRequest}
   * @memberof NeoforgeApiDeleteNeoforgeFromBuild
   */
  readonly attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest;
}

/**
 * Request parameters for listNeoforgeBuilds operation in NeoforgeApi.
 * @export
 * @interface NeoforgeApiListNeoforgeBuildsRequest
 */
export interface NeoforgeApiListNeoforgeBuildsRequest {
  /**
   * A neoforge identifier or slug
   * @type {string}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly neoforgeId: string;

  /**
   * Search query
   * @type {string}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly search?: string;

  /**
   * Sorting column
   * @type {string}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly sort?: string;

  /**
   * Sorting order
   * @type {'asc' | 'desc'}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly order?: ListNeoforgeBuildsOrderEnum;

  /**
   * Paging limit
   * @type {number}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly limit?: number;

  /**
   * Paging offset
   * @type {number}
   * @memberof NeoforgeApiListNeoforgeBuilds
   */
  readonly offset?: number;
}

/**
 * Request parameters for listNeoforges operation in NeoforgeApi.
 * @export
 * @interface NeoforgeApiListNeoforgesRequest
 */
export interface NeoforgeApiListNeoforgesRequest {
  /**
   * Search query
   * @type {string}
   * @memberof NeoforgeApiListNeoforges
   */
  readonly search?: string;
}

/**
 * NeoforgeApi - object-oriented interface
 * @export
 * @class NeoforgeApi
 * @extends {BaseAPI}
 */
export class NeoforgeApi extends BaseAPI {
  /**
   *
   * @summary Attach a build to a Neoforge version
   * @param {NeoforgeApiAttachNeoforgeToBuildRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeoforgeApi
   */
  public attachNeoforgeToBuild(
    requestParameters: NeoforgeApiAttachNeoforgeToBuildRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return NeoforgeApiFp(this.configuration)
      .attachNeoforgeToBuild(
        requestParameters.neoforgeId,
        requestParameters.attachMinecraftToBuildRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Unlink a build from a Neoforge version
   * @param {NeoforgeApiDeleteNeoforgeFromBuildRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeoforgeApi
   */
  public deleteNeoforgeFromBuild(
    requestParameters: NeoforgeApiDeleteNeoforgeFromBuildRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return NeoforgeApiFp(this.configuration)
      .deleteNeoforgeFromBuild(
        requestParameters.neoforgeId,
        requestParameters.attachMinecraftToBuildRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch the builds attached to a Neoforge version
   * @param {NeoforgeApiListNeoforgeBuildsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeoforgeApi
   */
  public listNeoforgeBuilds(
    requestParameters: NeoforgeApiListNeoforgeBuildsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return NeoforgeApiFp(this.configuration)
      .listNeoforgeBuilds(
        requestParameters.neoforgeId,
        requestParameters.search,
        requestParameters.sort,
        requestParameters.order,
        requestParameters.limit,
        requestParameters.offset,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch the available Neoforge versions
   * @param {NeoforgeApiListNeoforgesRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeoforgeApi
   */
  public listNeoforges(
    requestParameters: NeoforgeApiListNeoforgesRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return NeoforgeApiFp(this.configuration)
      .listNeoforges(requestParameters.search, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Update the available Neoforge versions
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof NeoforgeApi
   */
  public updateNeoforge(options?: RawAxiosRequestConfig) {
    return NeoforgeApiFp(this.configuration)
      .updateNeoforge(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * @export
 */
export const ListNeoforgeBuildsOrderEnum = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type ListNeoforgeBuildsOrderEnum =
  (typeof ListNeoforgeBuildsOrderEnum)[keyof typeof ListNeoforgeBuildsOrderEnum];
