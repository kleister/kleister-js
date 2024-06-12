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
 * Model to represent mod
 * @export
 * @interface Mod
 */
export interface Mod {
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  slug?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  side?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  description?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  author?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  website?: string | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  donate?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof Mod
   */
  public?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Mod
   */
  updated_at?: string;
}
