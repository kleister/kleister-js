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

/* eslint-disable no-unused-vars */
import ApiClient from '../ApiClient'
import Build from '../model/Build'
import Minecraft from '../model/Minecraft'
import MinecraftBuildParams from '../model/MinecraftBuildParams'
/* eslint-enable no-unused-vars */

/**
* Minecraft service.
* @module kleister/api/MinecraftApi
* @version 1.0.0-alpha1
*/
export default class MinecraftApi {
  /**
    * Constructs a new MinecraftApi.
    * @alias module:kleister/api/MinecraftApi
    * @class
    * @param {module:kleister/ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:kleister/ApiClient#instance} if unspecified.
    */
  constructor (apiClient) {
    this.apiClient = apiClient || ApiClient.instance
  }

  /**
     * Assign a build to a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @param {module:kleister/model/MinecraftBuildParams} params The build data to append
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:kleister/model/Build>} and HTTP response
     */
  appendMinecraftToBuildWithHttpInfo (minecraftId, params) {
    let postBody = params
    // verify the required parameter 'minecraftId' is set
    if (minecraftId === undefined || minecraftId === null) {
      throw new Error("Missing the required parameter 'minecraftId' when calling appendMinecraftToBuild")
    }
    // verify the required parameter 'params' is set
    if (params === undefined || params === null) {
      throw new Error("Missing the required parameter 'params' when calling appendMinecraftToBuild")
    }

    let pathParams = {
      'minecraft_id': minecraftId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = [Build]
    return this.apiClient.callApi(
      '/minecraft/{minecraft_id}/builds', 'POST',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Assign a build to a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @param {module:kleister/model/MinecraftBuildParams} params The build data to append
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:kleister/model/Build>}
     */
  appendMinecraftToBuild (minecraftId, params) {
    return this.appendMinecraftToBuildWithHttpInfo(minecraftId, params)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Unlink a build from a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @param {module:kleister/model/MinecraftBuildParams} params The build data to unlink
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:kleister/model/Build>} and HTTP response
     */
  deleteMinecraftFromBuildWithHttpInfo (minecraftId, params) {
    let postBody = params
    // verify the required parameter 'minecraftId' is set
    if (minecraftId === undefined || minecraftId === null) {
      throw new Error("Missing the required parameter 'minecraftId' when calling deleteMinecraftFromBuild")
    }
    // verify the required parameter 'params' is set
    if (params === undefined || params === null) {
      throw new Error("Missing the required parameter 'params' when calling deleteMinecraftFromBuild")
    }

    let pathParams = {
      'minecraft_id': minecraftId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = ['application/json']
    let accepts = ['application/json']
    let returnType = [Build]
    return this.apiClient.callApi(
      '/minecraft/{minecraft_id}/builds', 'DELETE',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Unlink a build from a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @param {module:kleister/model/MinecraftBuildParams} params The build data to unlink
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:kleister/model/Build>}
     */
  deleteMinecraftFromBuild (minecraftId, params) {
    return this.deleteMinecraftFromBuildWithHttpInfo(minecraftId, params)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch the builds assigned to a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:kleister/model/Build>} and HTTP response
     */
  listMinecraftBuildsWithHttpInfo (minecraftId) {
    let postBody = null
    // verify the required parameter 'minecraftId' is set
    if (minecraftId === undefined || minecraftId === null) {
      throw new Error("Missing the required parameter 'minecraftId' when calling listMinecraftBuilds")
    }

    let pathParams = {
      'minecraft_id': minecraftId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [Build]
    return this.apiClient.callApi(
      '/minecraft/{minecraft_id}/builds', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch the builds assigned to a Minecraft version
     * @param {String} minecraftId A minecraft UUID or slug
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:kleister/model/Build>}
     */
  listMinecraftBuilds (minecraftId) {
    return this.listMinecraftBuildsWithHttpInfo(minecraftId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Fetch the available Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:kleister/model/Minecraft>} and HTTP response
     */
  listMinecraftsWithHttpInfo () {
    let postBody = null

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [Minecraft]
    return this.apiClient.callApi(
      '/minecraft', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Fetch the available Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:kleister/model/Minecraft>}
     */
  listMinecrafts () {
    return this.listMinecraftsWithHttpInfo()
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Search for available Minecraft versions
     * @param {String} minecraftId A search token to search Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:kleister/model/Minecraft>} and HTTP response
     */
  searchMinecraftsWithHttpInfo (minecraftId) {
    let postBody = null
    // verify the required parameter 'minecraftId' is set
    if (minecraftId === undefined || minecraftId === null) {
      throw new Error("Missing the required parameter 'minecraftId' when calling searchMinecrafts")
    }

    let pathParams = {
      'minecraft_id': minecraftId
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = [Minecraft]
    return this.apiClient.callApi(
      '/minecraft/{minecraft_id}', 'GET',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Search for available Minecraft versions
     * @param {String} minecraftId A search token to search Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:kleister/model/Minecraft>}
     */
  searchMinecrafts (minecraftId) {
    return this.searchMinecraftsWithHttpInfo(minecraftId)
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }

  /**
     * Update the available Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
  updateMinecraftWithHttpInfo () {
    let postBody = null

    let pathParams = {
    }
    let queryParams = {
    }
    let headerParams = {
    }
    let formParams = {
    }

    let authNames = []
    let contentTypes = []
    let accepts = ['application/json']
    let returnType = Object
    return this.apiClient.callApi(
      '/minecraft', 'PUT',
      pathParams, queryParams, headerParams, formParams, postBody,
      authNames, contentTypes, accepts, returnType, null
    )
  }

  /**
     * Update the available Minecraft versions
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
  updateMinecraft () {
    return this.updateMinecraftWithHttpInfo()
      .then(function (responseAndData) {
        return responseAndData.data
      })
  }
}
