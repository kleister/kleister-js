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
 * Model to represent neoforge
 * @export
 * @interface Neoforge
 */
export interface Neoforge {
  /**
   *
   * @type {string}
   * @memberof Neoforge
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Neoforge
   */
  name?: string | null;
  /**
   *
   * @type {string}
   * @memberof Neoforge
   */
  minecraft?: string | null;
  /**
   *
   * @type {string}
   * @memberof Neoforge
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Neoforge
   */
  updated_at?: string;
}
