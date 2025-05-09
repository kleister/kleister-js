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
import type { User } from "./user";
// May contain unused imports in some cases
// @ts-ignore
import type { UserPack } from "./user-pack";

/**
 *
 * @export
 * @interface ListUserPacks200Response
 */
export interface ListUserPacks200Response {
  /**
   *
   * @type {number}
   * @memberof ListUserPacks200Response
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof ListUserPacks200Response
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof ListUserPacks200Response
   */
  offset: number;
  /**
   *
   * @type {User}
   * @memberof ListUserPacks200Response
   */
  user?: User;
  /**
   *
   * @type {Array<UserPack>}
   * @memberof ListUserPacks200Response
   */
  packs: Array<UserPack>;
}
