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
import type { UserGroup } from "./user-group";

/**
 *
 * @export
 * @interface ListUserGroups200Response
 */
export interface ListUserGroups200Response {
  /**
   *
   * @type {number}
   * @memberof ListUserGroups200Response
   */
  total: number;
  /**
   *
   * @type {number}
   * @memberof ListUserGroups200Response
   */
  limit: number;
  /**
   *
   * @type {number}
   * @memberof ListUserGroups200Response
   */
  offset: number;
  /**
   *
   * @type {User}
   * @memberof ListUserGroups200Response
   */
  user?: User;
  /**
   *
   * @type {Array<UserGroup>}
   * @memberof ListUserGroups200Response
   */
  groups: Array<UserGroup>;
}
