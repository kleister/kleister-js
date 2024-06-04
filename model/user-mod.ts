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
import type { Mod } from "./mod";
// May contain unused imports in some cases
// @ts-ignore
import type { User } from "./user";

/**
 * Model to represent user mod
 * @export
 * @interface UserMod
 */
export interface UserMod {
  /**
   *
   * @type {string}
   * @memberof UserMod
   */
  user_id: string;
  /**
   *
   * @type {User}
   * @memberof UserMod
   */
  user?: User;
  /**
   *
   * @type {string}
   * @memberof UserMod
   */
  mod_id: string;
  /**
   *
   * @type {Mod}
   * @memberof UserMod
   */
  mod?: Mod;
  /**
   *
   * @type {string}
   * @memberof UserMod
   */
  perm?: UserModPermEnum;
  /**
   *
   * @type {string}
   * @memberof UserMod
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof UserMod
   */
  updated_at?: string;
}

export const UserModPermEnum = {
  User: "user",
  Admin: "admin",
  Owner: "owner",
} as const;

export type UserModPermEnum =
  (typeof UserModPermEnum)[keyof typeof UserModPermEnum];
