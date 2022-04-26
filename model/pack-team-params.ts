/* tslint:disable */
/* eslint-disable */
/**
 * Kleister OpenAPI
 * API definition for Kleister, manage mod packs for Minecraft
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PackTeamParams
 */
export interface PackTeamParams {
  /**
   *
   * @type {string}
   * @memberof PackTeamParams
   */
  team: string;
  /**
   *
   * @type {string}
   * @memberof PackTeamParams
   */
  perm: PackTeamParamsPermEnum;
}

export const PackTeamParamsPermEnum = {
  User: "user",
  Admin: "admin",
  Owner: "owner",
} as const;

export type PackTeamParamsPermEnum =
  typeof PackTeamParamsPermEnum[keyof typeof PackTeamParamsPermEnum];
