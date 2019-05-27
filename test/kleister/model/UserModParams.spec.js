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

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd() + '/src/kleister/index'], factory)
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd() + '/src/kleister/index'))
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Kleister)
  }
}(this, function (expect, Kleister) {
  'use strict'

  // eslint-disable-next-line no-unused-vars
  var instance

  beforeEach(function () {
    instance = new Kleister.UserModParams()
  })

  /* eslint-disable no-unused-vars */
  var getProperty = function (object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') { return object[getter]() } else { return object[property] }
  }
  /* eslint-enable no-unused-vars */

  /* eslint-disable no-unused-vars */
  var setProperty = function (object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') { object[setter](value) } else { object[property] = value }
  }
  /* eslint-enable no-unused-vars */

  describe('UserModParams', function () {
    it('should create an instance of UserModParams', function () {
      // uncomment below and update the code to test UserModParams
      // var instane = new Kleister.UserModParams();
      // expect(instance).to.be.a(Kleister.UserModParams);
    })

    it('should have the property user (base name: "user")', function () {
      // uncomment below and update the code to test the property user
      // var instane = new Kleister.UserModParams();
      // expect(instance).to.be();
    })

    it('should have the property mod (base name: "mod")', function () {
      // uncomment below and update the code to test the property mod
      // var instane = new Kleister.UserModParams();
      // expect(instance).to.be();
    })

    it('should have the property perm (base name: "perm")', function () {
      // uncomment below and update the code to test the property perm
      // var instane = new Kleister.UserModParams();
      // expect(instance).to.be();
    })
  })
}))
