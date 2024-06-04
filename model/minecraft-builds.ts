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
import type { Minecraft } from "./minecraft";

/**
 * Model to represent minecraft builds
 * @export
 * @interface MinecraftBuilds
 */
export interface MinecraftBuilds {
  /**
   *
   * @type {Minecraft}
   * @memberof MinecraftBuilds
   */
  minecraft?: Minecraft;
  /**
   *
   * @type {number}
   * @memberof MinecraftBuilds
   */
  total?: number;
  /**
   *
   * @type {Array<Build>}
   * @memberof MinecraftBuilds
   */
  builds?: Array<Build>;
}
