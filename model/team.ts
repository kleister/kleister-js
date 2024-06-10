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
import type { TeamMod } from "./team-mod";
// May contain unused imports in some cases
// @ts-ignore
import type { TeamPack } from "./team-pack";
// May contain unused imports in some cases
// @ts-ignore
import type { UserTeam } from "./user-team";

/**
 * Model to represent team
 * @export
 * @interface Team
 */
export interface Team {
  /**
   *
   * @type {string}
   * @memberof Team
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  slug?: string | null;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Team
   */
  updated_at?: string;
  /**
   *
   * @type {Array<UserTeam>}
   * @memberof Team
   */
  users?: Array<UserTeam> | null;
  /**
   *
   * @type {Array<TeamPack>}
   * @memberof Team
   */
  packs?: Array<TeamPack> | null;
  /**
   *
   * @type {Array<TeamMod>}
   * @memberof Team
   */
  mods?: Array<TeamMod> | null;
}