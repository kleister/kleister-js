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
import type { Build } from "./build";
// May contain unused imports in some cases
// @ts-ignore
import type { BuildVersion } from "./build-version";
// May contain unused imports in some cases
// @ts-ignore
import type { Pack } from "./pack";

/**
 * Model to represent build versions
 * @export
 * @interface BuildVersions
 */
export interface BuildVersions {
  /**
   *
   * @type {Pack}
   * @memberof BuildVersions
   */
  pack?: Pack;
  /**
   *
   * @type {Build}
   * @memberof BuildVersions
   */
  build?: Build;
  /**
   *
   * @type {number}
   * @memberof BuildVersions
   */
  total?: number;
  /**
   *
   * @type {Array<BuildVersion>}
   * @memberof BuildVersions
   */
  versions?: Array<BuildVersion>;
}