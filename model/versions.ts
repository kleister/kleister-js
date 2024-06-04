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
import type { Version } from "./version";

/**
 * Model to represent list of versions
 * @export
 * @interface Versions
 */
export interface Versions {
  /**
   *
   * @type {number}
   * @memberof Versions
   */
  total?: number;
  /**
   *
   * @type {Mod}
   * @memberof Versions
   */
  mod?: Mod;
  /**
   *
   * @type {Array<Version>}
   * @memberof Versions
   */
  versions?: Array<Version>;
}
