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
 *
 */

import ApiClient from '../ApiClient'

/**
 * The ModTeamParams model module.
 * @module kleister/model/ModTeamParams
 * @version 1.0.0-alpha1
 */
class ModTeamParams {
  /**
     * Constructs a new <code>ModTeamParams</code>.
     * @alias module:kleister/model/ModTeamParams
     * @param team {String}
     * @param perm {module:kleister/model/ModTeamParams.PermEnum}
     */
  constructor (team, perm) {
    ModTeamParams.initialize(this, team, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, team, perm) {
    obj['team'] = team
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>ModTeamParams</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:kleister/model/ModTeamParams} obj Optional instance to populate.
     * @return {module:kleister/model/ModTeamParams} The populated <code>ModTeamParams</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new ModTeamParams()

      if (data.hasOwnProperty('team')) {
        obj['team'] = ApiClient.convertToType(data['team'], 'String')
      }
      if (data.hasOwnProperty('perm')) {
        obj['perm'] = ApiClient.convertToType(data['perm'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} team
 */
ModTeamParams.prototype['team'] = undefined

/**
 * @member {module:kleister/model/ModTeamParams.PermEnum} perm
 */
ModTeamParams.prototype['perm'] = undefined

/**
 * Allowed values for the <code>perm</code> property.
 * @enum {String}
 * @readonly
 */
ModTeamParams['PermEnum'] = {

  /**
     * value: "user"
     * @const
     */
  'user': 'user',

  /**
     * value: "admin"
     * @const
     */
  'admin': 'admin',

  /**
     * value: "owner"
     * @const
     */
  'owner': 'owner'
}

export default ModTeamParams
