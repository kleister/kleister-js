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
 * The TeamMod model module.
 * @module kleister/model/TeamMod
 * @version 1.0.0-alpha1
 */
class TeamMod {
  /**
     * Constructs a new <code>TeamMod</code>.
     * @alias module:kleister/model/TeamMod
     * @param teamId {String}
     * @param modId {String}
     * @param perm {String}
     */
  constructor (teamId, modId, perm) {
    TeamMod.initialize(this, teamId, modId, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, teamId, modId, perm) {
    obj['team_id'] = teamId
    obj['mod_id'] = modId
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>TeamMod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:kleister/model/TeamMod} obj Optional instance to populate.
     * @return {module:kleister/model/TeamMod} The populated <code>TeamMod</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new TeamMod()

      if (data.hasOwnProperty('team_id')) {
        obj['team_id'] = ApiClient.convertToType(data['team_id'], 'String')
      }
      if (data.hasOwnProperty('mod_id')) {
        obj['mod_id'] = ApiClient.convertToType(data['mod_id'], 'String')
      }
      if (data.hasOwnProperty('perm')) {
        obj['perm'] = ApiClient.convertToType(data['perm'], 'String')
      }
    }
    return obj
  }
}

/**
 * @member {String} team_id
 */
TeamMod.prototype['team_id'] = undefined

/**
 * @member {String} mod_id
 */
TeamMod.prototype['mod_id'] = undefined

/**
 * @member {String} perm
 */
TeamMod.prototype['perm'] = undefined

export default TeamMod
