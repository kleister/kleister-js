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
import type { Version } from "./version";

/**
 * Model to represent build version
 * @export
 * @interface BuildVersion
 */
export interface BuildVersion {
  /**
   *
   * @type {string}
   * @memberof BuildVersion
   */
  build_id: string;
  /**
   *
   * @type {Build}
   * @memberof BuildVersion
   */
  build?: Build;
  /**
   *
   * @type {string}
   * @memberof BuildVersion
   */
  version_id: string;
  /**
   *
   * @type {Version}
   * @memberof BuildVersion
   */
  version?: Version;
  /**
   *
   * @type {string}
   * @memberof BuildVersion
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof BuildVersion
   */
  updated_at?: string;
}