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

// May contain unused imports in some cases
// @ts-ignore
import type { Build } from "./build";
// May contain unused imports in some cases
// @ts-ignore
import type { Neoforge } from "./neoforge";

/**
 *
 * @export
 * @interface ListNeoforgeBuilds200Response
 */
export interface ListNeoforgeBuilds200Response {
  /**
   *
   * @type {number}
   * @memberof ListNeoforgeBuilds200Response
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof ListNeoforgeBuilds200Response
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof ListNeoforgeBuilds200Response
   */
  offset: number;
  /**
   *
   * @type {Neoforge}
   * @memberof ListNeoforgeBuilds200Response
   */
  neoforge?: Neoforge;
  /**
   *
   * @type {Array<Build>}
   * @memberof ListNeoforgeBuilds200Response
   */
  builds: Array<Build>;
}
