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
 * Parameters to attach or unlink pack user
 * @export
 * @interface PackUserParams
 */
export interface PackUserParams {
  /**
   *
   * @type {string}
   * @memberof PackUserParams
   */
  user: string;
  /**
   *
   * @type {string}
   * @memberof PackUserParams
   */
  perm?: PackUserParamsPermEnum;
}

export const PackUserParamsPermEnum = {
  User: "user",
  Admin: "admin",
  Owner: "owner",
} as const;

export type PackUserParamsPermEnum =
  (typeof PackUserParamsPermEnum)[keyof typeof PackUserParamsPermEnum];