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
import type { AuthToken } from "../model";
// @ts-ignore
import type { Notification } from "../model";
// @ts-ignore
import type { Profile } from "../model";
// @ts-ignore
import type { UpdateProfileRequest } from "../model";
/**
 * ProfileApi - axios parameter creator
 * @export
 */
export const ProfileApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Fetch profile details of the personal account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showProfile: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/profile/self`;
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
     * @summary Retrieve an unlimited auth token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tokenProfile: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/profile/token`;
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
     * @summary Update your own profile information
     * @param {UpdateProfileRequest} updateProfileRequest The profile data to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProfile: async (
      updateProfileRequest: UpdateProfileRequest,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'updateProfileRequest' is not null or undefined
      assertParamExists(
        "updateProfile",
        "updateProfileRequest",
        updateProfileRequest,
      );
      const localVarPath = `/profile/self`;
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
        updateProfileRequest,
        localVarRequestOptions,
        configuration,
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ProfileApi - functional programming interface
 * @export
 */
export const ProfileApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = ProfileApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Fetch profile details of the personal account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async showProfile(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Profile>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.showProfile(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ProfileApi.showProfile"]?.[
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
     * @summary Retrieve an unlimited auth token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async tokenProfile(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthToken>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.tokenProfile(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ProfileApi.tokenProfile"]?.[
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
     * @summary Update your own profile information
     * @param {UpdateProfileRequest} updateProfileRequest The profile data to update
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async updateProfile(
      updateProfileRequest: UpdateProfileRequest,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Profile>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.updateProfile(
        updateProfileRequest,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["ProfileApi.updateProfile"]?.[
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
 * ProfileApi - factory interface
 * @export
 */
export const ProfileApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = ProfileApiFp(configuration);
  return {
    /**
     *
     * @summary Fetch profile details of the personal account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    showProfile(options?: RawAxiosRequestConfig): AxiosPromise<Profile> {
      return localVarFp
        .showProfile(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Retrieve an unlimited auth token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    tokenProfile(options?: RawAxiosRequestConfig): AxiosPromise<AuthToken> {
      return localVarFp
        .tokenProfile(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update your own profile information
     * @param {ProfileApiUpdateProfileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateProfile(
      requestParameters: ProfileApiUpdateProfileRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Profile> {
      return localVarFp
        .updateProfile(requestParameters.updateProfileRequest, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for updateProfile operation in ProfileApi.
 * @export
 * @interface ProfileApiUpdateProfileRequest
 */
export interface ProfileApiUpdateProfileRequest {
  /**
   * The profile data to update
   * @type {UpdateProfileRequest}
   * @memberof ProfileApiUpdateProfile
   */
  readonly updateProfileRequest: UpdateProfileRequest;
}

/**
 * ProfileApi - object-oriented interface
 * @export
 * @class ProfileApi
 * @extends {BaseAPI}
 */
export class ProfileApi extends BaseAPI {
  /**
   *
   * @summary Fetch profile details of the personal account
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProfileApi
   */
  public showProfile(options?: RawAxiosRequestConfig) {
    return ProfileApiFp(this.configuration)
      .showProfile(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Retrieve an unlimited auth token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProfileApi
   */
  public tokenProfile(options?: RawAxiosRequestConfig) {
    return ProfileApiFp(this.configuration)
      .tokenProfile(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Update your own profile information
   * @param {ProfileApiUpdateProfileRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ProfileApi
   */
  public updateProfile(
    requestParameters: ProfileApiUpdateProfileRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return ProfileApiFp(this.configuration)
      .updateProfile(requestParameters.updateProfileRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
