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
import type { ListQuiltBuilds200Response } from "../model";
// @ts-ignore
import type { ListQuilts200Response } from "../model";
// @ts-ignore
import type { Notification } from "../model";
/**
 * QuiltApi - axios parameter creator
 * @export
 */
export const QuiltApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Attach a build to a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The quilt build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    attachQuiltToBuild: async (
      quiltId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'quiltId' is not null or undefined
      assertParamExists("attachQuiltToBuild", "quiltId", quiltId);
      // verify required parameter 'attachMinecraftToBuildRequest' is not null or undefined
      assertParamExists(
        "attachQuiltToBuild",
        "attachMinecraftToBuildRequest",
        attachMinecraftToBuildRequest,
      );
      const localVarPath = `/quilt/{quilt_id}/builds`.replace(
        `{${"quilt_id"}}`,
        encodeURIComponent(String(quiltId)),
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
     * @summary Unlink a build from a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The quilt build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQuiltFromBuild: async (
      quiltId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'quiltId' is not null or undefined
      assertParamExists("deleteQuiltFromBuild", "quiltId", quiltId);
      // verify required parameter 'attachMinecraftToBuildRequest' is not null or undefined
      assertParamExists(
        "deleteQuiltFromBuild",
        "attachMinecraftToBuildRequest",
        attachMinecraftToBuildRequest,
      );
      const localVarPath = `/quilt/{quilt_id}/builds`.replace(
        `{${"quilt_id"}}`,
        encodeURIComponent(String(quiltId)),
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
     * @summary Fetch the builds attached to a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {string} [search] Search query
     * @param {string} [sort] Sorting column
     * @param {ListQuiltBuildsOrderEnum} [order] Sorting order
     * @param {number} [limit] Paging limit
     * @param {number} [offset] Paging offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listQuiltBuilds: async (
      quiltId: string,
      search?: string,
      sort?: string,
      order?: ListQuiltBuildsOrderEnum,
      limit?: number,
      offset?: number,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'quiltId' is not null or undefined
      assertParamExists("listQuiltBuilds", "quiltId", quiltId);
      const localVarPath = `/quilt/{quilt_id}/builds`.replace(
        `{${"quilt_id"}}`,
        encodeURIComponent(String(quiltId)),
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
     * @summary Fetch the available Quilt versions
     * @param {string} [search] Search query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listQuilts: async (
      search?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/quilt`;
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
     * @summary Update the available Quilt versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQuilt: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/quilt`;
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
 * QuiltApi - functional programming interface
 * @export
 */
export const QuiltApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = QuiltApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Attach a build to a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The quilt build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async attachQuiltToBuild(
      quiltId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.attachQuiltToBuild(
          quiltId,
          attachMinecraftToBuildRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["QuiltApi.attachQuiltToBuild"]?.[
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
     * @summary Unlink a build from a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {AttachMinecraftToBuildRequest} attachMinecraftToBuildRequest The quilt build data to create or update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteQuiltFromBuild(
      quiltId: string,
      attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteQuiltFromBuild(
          quiltId,
          attachMinecraftToBuildRequest,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["QuiltApi.deleteQuiltFromBuild"]?.[
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
     * @summary Fetch the builds attached to a Quilt version
     * @param {string} quiltId A quilt identifier or slug
     * @param {string} [search] Search query
     * @param {string} [sort] Sorting column
     * @param {ListQuiltBuildsOrderEnum} [order] Sorting order
     * @param {number} [limit] Paging limit
     * @param {number} [offset] Paging offset
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listQuiltBuilds(
      quiltId: string,
      search?: string,
      sort?: string,
      order?: ListQuiltBuildsOrderEnum,
      limit?: number,
      offset?: number,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ListQuiltBuilds200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listQuiltBuilds(
        quiltId,
        search,
        sort,
        order,
        limit,
        offset,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["QuiltApi.listQuiltBuilds"]?.[
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
     * @summary Fetch the available Quilt versions
     * @param {string} [search] Search query
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listQuilts(
      search?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string,
      ) => AxiosPromise<ListQuilts200Response>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.listQuilts(
        search,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["QuiltApi.listQuilts"]?.[
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
     * @summary Update the available Quilt versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateQuilt(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.updateQuilt(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["QuiltApi.updateQuilt"]?.[
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
 * QuiltApi - factory interface
 * @export
 */
export const QuiltApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = QuiltApiFp(configuration);
  return {
    /**
     *
     * @summary Attach a build to a Quilt version
     * @param {QuiltApiAttachQuiltToBuildRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    attachQuiltToBuild(
      requestParameters: QuiltApiAttachQuiltToBuildRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .attachQuiltToBuild(
          requestParameters.quiltId,
          requestParameters.attachMinecraftToBuildRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Unlink a build from a Quilt version
     * @param {QuiltApiDeleteQuiltFromBuildRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteQuiltFromBuild(
      requestParameters: QuiltApiDeleteQuiltFromBuildRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .deleteQuiltFromBuild(
          requestParameters.quiltId,
          requestParameters.attachMinecraftToBuildRequest,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Fetch the builds attached to a Quilt version
     * @param {QuiltApiListQuiltBuildsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listQuiltBuilds(
      requestParameters: QuiltApiListQuiltBuildsRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListQuiltBuilds200Response> {
      return localVarFp
        .listQuiltBuilds(
          requestParameters.quiltId,
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
     * @summary Fetch the available Quilt versions
     * @param {QuiltApiListQuiltsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listQuilts(
      requestParameters: QuiltApiListQuiltsRequest = {},
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<ListQuilts200Response> {
      return localVarFp
        .listQuilts(requestParameters.search, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update the available Quilt versions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateQuilt(options?: RawAxiosRequestConfig): AxiosPromise<Notification> {
      return localVarFp
        .updateQuilt(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for attachQuiltToBuild operation in QuiltApi.
 * @export
 * @interface QuiltApiAttachQuiltToBuildRequest
 */
export interface QuiltApiAttachQuiltToBuildRequest {
  /**
   * A quilt identifier or slug
   * @type {string}
   * @memberof QuiltApiAttachQuiltToBuild
   */
  readonly quiltId: string;

  /**
   * The quilt build data to create or update
   * @type {AttachMinecraftToBuildRequest}
   * @memberof QuiltApiAttachQuiltToBuild
   */
  readonly attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest;
}

/**
 * Request parameters for deleteQuiltFromBuild operation in QuiltApi.
 * @export
 * @interface QuiltApiDeleteQuiltFromBuildRequest
 */
export interface QuiltApiDeleteQuiltFromBuildRequest {
  /**
   * A quilt identifier or slug
   * @type {string}
   * @memberof QuiltApiDeleteQuiltFromBuild
   */
  readonly quiltId: string;

  /**
   * The quilt build data to create or update
   * @type {AttachMinecraftToBuildRequest}
   * @memberof QuiltApiDeleteQuiltFromBuild
   */
  readonly attachMinecraftToBuildRequest: AttachMinecraftToBuildRequest;
}

/**
 * Request parameters for listQuiltBuilds operation in QuiltApi.
 * @export
 * @interface QuiltApiListQuiltBuildsRequest
 */
export interface QuiltApiListQuiltBuildsRequest {
  /**
   * A quilt identifier or slug
   * @type {string}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly quiltId: string;

  /**
   * Search query
   * @type {string}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly search?: string;

  /**
   * Sorting column
   * @type {string}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly sort?: string;

  /**
   * Sorting order
   * @type {'asc' | 'desc'}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly order?: ListQuiltBuildsOrderEnum;

  /**
   * Paging limit
   * @type {number}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly limit?: number;

  /**
   * Paging offset
   * @type {number}
   * @memberof QuiltApiListQuiltBuilds
   */
  readonly offset?: number;
}

/**
 * Request parameters for listQuilts operation in QuiltApi.
 * @export
 * @interface QuiltApiListQuiltsRequest
 */
export interface QuiltApiListQuiltsRequest {
  /**
   * Search query
   * @type {string}
   * @memberof QuiltApiListQuilts
   */
  readonly search?: string;
}

/**
 * QuiltApi - object-oriented interface
 * @export
 * @class QuiltApi
 * @extends {BaseAPI}
 */
export class QuiltApi extends BaseAPI {
  /**
   *
   * @summary Attach a build to a Quilt version
   * @param {QuiltApiAttachQuiltToBuildRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QuiltApi
   */
  public attachQuiltToBuild(
    requestParameters: QuiltApiAttachQuiltToBuildRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return QuiltApiFp(this.configuration)
      .attachQuiltToBuild(
        requestParameters.quiltId,
        requestParameters.attachMinecraftToBuildRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Unlink a build from a Quilt version
   * @param {QuiltApiDeleteQuiltFromBuildRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QuiltApi
   */
  public deleteQuiltFromBuild(
    requestParameters: QuiltApiDeleteQuiltFromBuildRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return QuiltApiFp(this.configuration)
      .deleteQuiltFromBuild(
        requestParameters.quiltId,
        requestParameters.attachMinecraftToBuildRequest,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Fetch the builds attached to a Quilt version
   * @param {QuiltApiListQuiltBuildsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QuiltApi
   */
  public listQuiltBuilds(
    requestParameters: QuiltApiListQuiltBuildsRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return QuiltApiFp(this.configuration)
      .listQuiltBuilds(
        requestParameters.quiltId,
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
   * @summary Fetch the available Quilt versions
   * @param {QuiltApiListQuiltsRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QuiltApi
   */
  public listQuilts(
    requestParameters: QuiltApiListQuiltsRequest = {},
    options?: RawAxiosRequestConfig,
  ) {
    return QuiltApiFp(this.configuration)
      .listQuilts(requestParameters.search, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Update the available Quilt versions
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof QuiltApi
   */
  public updateQuilt(options?: RawAxiosRequestConfig) {
    return QuiltApiFp(this.configuration)
      .updateQuilt(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

/**
 * @export
 */
export const ListQuiltBuildsOrderEnum = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type ListQuiltBuildsOrderEnum =
  (typeof ListQuiltBuildsOrderEnum)[keyof typeof ListQuiltBuildsOrderEnum];
