/* tslint:disable */
/* eslint-disable */
/**
 * Kleister OpenAPI
 * API definition for Kleister, manage mod packs for Minecraft
 *
 * The version of the OpenAPI document: 1.0.0-alpha1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface Minecraft
 */
export interface Minecraft {
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  slug?: string;
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  type: string;
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  created_at?: string;
  /**
   *
   * @type {string}
   * @memberof Minecraft
   */
  updated_at?: string;
}
