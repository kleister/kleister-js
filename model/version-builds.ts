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
import type { BuildVersion } from "./build-version";
// May contain unused imports in some cases
// @ts-ignore
import type { Mod } from "./mod";
// May contain unused imports in some cases
// @ts-ignore
import type { Version } from "./version";

/**
 * Model to represent version builds
 * @export
 * @interface VersionBuilds
 */
export interface VersionBuilds {
  /**
   *
   * @type {Mod}
   * @memberof VersionBuilds
   */
  mod?: Mod;
  /**
   *
   * @type {Version}
   * @memberof VersionBuilds
   */
  version?: Version;
  /**
   *
   * @type {number}
   * @memberof VersionBuilds
   */
  total?: number;
  /**
   *
   * @type {Array<BuildVersion>}
   * @memberof VersionBuilds
   */
  builds?: Array<BuildVersion>;
}
