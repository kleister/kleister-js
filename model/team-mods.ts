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
import type { Team } from "./team";
// May contain unused imports in some cases
// @ts-ignore
import type { TeamMod } from "./team-mod";

/**
 * Model to represent team mods
 * @export
 * @interface TeamMods
 */
export interface TeamMods {
  /**
   *
   * @type {Team}
   * @memberof TeamMods
   */
  team?: Team;
  /**
   *
   * @type {number}
   * @memberof TeamMods
   */
  total?: number;
  /**
   *
   * @type {Array<TeamMod>}
   * @memberof TeamMods
   */
  mods?: Array<TeamMod>;
}