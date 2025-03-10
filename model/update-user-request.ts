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

/**
 *
 * @export
 * @interface UpdateUserRequest
 */
export interface UpdateUserRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  username?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  password?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof UpdateUserRequest
   */
  fullname?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof UpdateUserRequest
   */
  admin?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof UpdateUserRequest
   */
  active?: boolean | null;
}
