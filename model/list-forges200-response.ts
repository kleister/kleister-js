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
import type { Forge } from "./forge";

/**
 *
 * @export
 * @interface ListForges200Response
 */
export interface ListForges200Response {
  /**
   *
   * @type {number}
   * @memberof ListForges200Response
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof ListForges200Response
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof ListForges200Response
   */
  offset: number;
  /**
   *
   * @type {Array<Forge>}
   * @memberof ListForges200Response
   */
  versions: Array<Forge>;
}
