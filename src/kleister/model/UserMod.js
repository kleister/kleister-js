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
 * The UserMod model module.
 * @module kleister/model/UserMod
 * @version 1.0.0-alpha1
 */
class UserMod {
  /**
     * Constructs a new <code>UserMod</code>.
     * @alias module:kleister/model/UserMod
     * @param userId {String}
     * @param modId {String}
     * @param perm {module:kleister/model/UserMod.PermEnum}
     */
  constructor (userId, modId, perm) {
    UserMod.initialize(this, userId, modId, perm)
  }

  /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
  static initialize (obj, userId, modId, perm) {
    obj['user_id'] = userId
    obj['mod_id'] = modId
    obj['perm'] = perm
  }

  /**
     * Constructs a <code>UserMod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:kleister/model/UserMod} obj Optional instance to populate.
     * @return {module:kleister/model/UserMod} The populated <code>UserMod</code> instance.
     */
  static constructFromObject (data, obj) {
    if (data) {
      obj = obj || new UserMod()

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String')
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
 * @member {String} user_id
 */
UserMod.prototype['user_id'] = undefined

/**
 * @member {String} mod_id
 */
UserMod.prototype['mod_id'] = undefined

/**
 * @member {module:kleister/model/UserMod.PermEnum} perm
 */
UserMod.prototype['perm'] = undefined

/**
 * Allowed values for the <code>perm</code> property.
 * @enum {String}
 * @readonly
 */
UserMod['PermEnum'] = {

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

export default UserMod
