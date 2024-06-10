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
import type { AuthLogin } from "../model";
// @ts-ignore
import type { AuthToken } from "../model";
// @ts-ignore
import type { AuthVerify } from "../model";
// @ts-ignore
import type { Notification } from "../model";
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (
  configuration?: Configuration,
) {
  return {
    /**
     *
     * @summary Callback for external authentication
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {string} [code] Auth code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalCallback: async (
      provider: string,
      state?: string,
      code?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'provider' is not null or undefined
      assertParamExists("externalCallback", "provider", provider);
      const localVarPath = `/auth/{provider}/callback`.replace(
        `{${"provider"}}`,
        encodeURIComponent(String(provider)),
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

      if (state !== undefined) {
        localVarQueryParameter["state"] = state;
      }

      if (code !== undefined) {
        localVarQueryParameter["code"] = code;
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
     * @summary Initialize the external authentication
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalInitialize: async (
      provider: string,
      state?: string,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'provider' is not null or undefined
      assertParamExists("externalInitialize", "provider", provider);
      const localVarPath = `/auth/{provider}/initialize`.replace(
        `{${"provider"}}`,
        encodeURIComponent(String(provider)),
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

      if (state !== undefined) {
        localVarQueryParameter["state"] = state;
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
     * @summary Authenticate an user by credentials
     * @param {AuthLogin} authLogin The credentials to authenticate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAuth: async (
      authLogin: AuthLogin,
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      // verify required parameter 'authLogin' is not null or undefined
      assertParamExists("loginAuth", "authLogin", authLogin);
      const localVarPath = `/auth/login`;
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
        authLogin,
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
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAuth: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/refresh`;
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

      // authentication Cookie required
      await setApiKeyToObject(localVarHeaderParameter, "Cookie", configuration);

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
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyAuth: async (
      options: RawAxiosRequestConfig = {},
    ): Promise<RequestArgs> => {
      const localVarPath = `/auth/verify`;
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

      // authentication Cookie required
      await setApiKeyToObject(localVarHeaderParameter, "Cookie", configuration);

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
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Callback for external authentication
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {string} [code] Auth code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async externalCallback(
      provider: string,
      state?: string,
      code?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.externalCallback(
          provider,
          state,
          code,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.externalCallback"]?.[
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
     * @summary Initialize the external authentication
     * @param {string} provider An identifier for the auth provider
     * @param {string} [state] Auth state
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async externalInitialize(
      provider: string,
      state?: string,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Notification>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.externalInitialize(
          provider,
          state,
          options,
        );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.externalInitialize"]?.[
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
     * @summary Authenticate an user by credentials
     * @param {AuthLogin} authLogin The credentials to authenticate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async loginAuth(
      authLogin: AuthLogin,
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthToken>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.loginAuth(
        authLogin,
        options,
      );
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.loginAuth"]?.[localVarOperationServerIndex]
          ?.url;
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
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async refreshAuth(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthToken>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.refreshAuth(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.refreshAuth"]?.[
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
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async verifyAuth(
      options?: RawAxiosRequestConfig,
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthVerify>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.verifyAuth(options);
      const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
      const localVarOperationServerBasePath =
        operationServerMap["AuthApi.verifyAuth"]?.[localVarOperationServerIndex]
          ?.url;
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
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance,
) {
  const localVarFp = AuthApiFp(configuration);
  return {
    /**
     *
     * @summary Callback for external authentication
     * @param {AuthApiExternalCallbackRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalCallback(
      requestParameters: AuthApiExternalCallbackRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .externalCallback(
          requestParameters.provider,
          requestParameters.state,
          requestParameters.code,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Initialize the external authentication
     * @param {AuthApiExternalInitializeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    externalInitialize(
      requestParameters: AuthApiExternalInitializeRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<Notification> {
      return localVarFp
        .externalInitialize(
          requestParameters.provider,
          requestParameters.state,
          options,
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Authenticate an user by credentials
     * @param {AuthApiLoginAuthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginAuth(
      requestParameters: AuthApiLoginAuthRequest,
      options?: RawAxiosRequestConfig,
    ): AxiosPromise<AuthToken> {
      return localVarFp
        .loginAuth(requestParameters.authLogin, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Refresh an auth token before it expires
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    refreshAuth(options?: RawAxiosRequestConfig): AxiosPromise<AuthToken> {
      return localVarFp
        .refreshAuth(options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Verify validity for an authentication token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyAuth(options?: RawAxiosRequestConfig): AxiosPromise<AuthVerify> {
      return localVarFp
        .verifyAuth(options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * Request parameters for externalCallback operation in AuthApi.
 * @export
 * @interface AuthApiExternalCallbackRequest
 */
export interface AuthApiExternalCallbackRequest {
  /**
   * An identifier for the auth provider
   * @type {string}
   * @memberof AuthApiExternalCallback
   */
  readonly provider: string;

  /**
   * Auth state
   * @type {string}
   * @memberof AuthApiExternalCallback
   */
  readonly state?: string;

  /**
   * Auth code
   * @type {string}
   * @memberof AuthApiExternalCallback
   */
  readonly code?: string;
}

/**
 * Request parameters for externalInitialize operation in AuthApi.
 * @export
 * @interface AuthApiExternalInitializeRequest
 */
export interface AuthApiExternalInitializeRequest {
  /**
   * An identifier for the auth provider
   * @type {string}
   * @memberof AuthApiExternalInitialize
   */
  readonly provider: string;

  /**
   * Auth state
   * @type {string}
   * @memberof AuthApiExternalInitialize
   */
  readonly state?: string;
}

/**
 * Request parameters for loginAuth operation in AuthApi.
 * @export
 * @interface AuthApiLoginAuthRequest
 */
export interface AuthApiLoginAuthRequest {
  /**
   * The credentials to authenticate
   * @type {AuthLogin}
   * @memberof AuthApiLoginAuth
   */
  readonly authLogin: AuthLogin;
}

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
  /**
   *
   * @summary Callback for external authentication
   * @param {AuthApiExternalCallbackRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public externalCallback(
    requestParameters: AuthApiExternalCallbackRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .externalCallback(
        requestParameters.provider,
        requestParameters.state,
        requestParameters.code,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Initialize the external authentication
   * @param {AuthApiExternalInitializeRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public externalInitialize(
    requestParameters: AuthApiExternalInitializeRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .externalInitialize(
        requestParameters.provider,
        requestParameters.state,
        options,
      )
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Authenticate an user by credentials
   * @param {AuthApiLoginAuthRequest} requestParameters Request parameters.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public loginAuth(
    requestParameters: AuthApiLoginAuthRequest,
    options?: RawAxiosRequestConfig,
  ) {
    return AuthApiFp(this.configuration)
      .loginAuth(requestParameters.authLogin, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Refresh an auth token before it expires
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public refreshAuth(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .refreshAuth(options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Verify validity for an authentication token
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof AuthApi
   */
  public verifyAuth(options?: RawAxiosRequestConfig) {
    return AuthApiFp(this.configuration)
      .verifyAuth(options)
      .then((request) => request(this.axios, this.basePath));
  }
}