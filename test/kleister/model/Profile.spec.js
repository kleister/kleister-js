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
    instance = new Kleister.Profile()
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

  describe('Profile', function () {
    it('should create an instance of Profile', function () {
      // uncomment below and update the code to test Profile
      // var instane = new Kleister.Profile();
      // expect(instance).to.be.a(Kleister.Profile);
    })

    it('should have the property id (base name: "id")', function () {
      // uncomment below and update the code to test the property id
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property slug (base name: "slug")', function () {
      // uncomment below and update the code to test the property slug
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property username (base name: "username")', function () {
      // uncomment below and update the code to test the property username
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property password (base name: "password")', function () {
      // uncomment below and update the code to test the property password
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property email (base name: "email")', function () {
      // uncomment below and update the code to test the property email
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property admin (base name: "admin")', function () {
      // uncomment below and update the code to test the property admin
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property active (base name: "active")', function () {
      // uncomment below and update the code to test the property active
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property createdAt (base name: "created_at")', function () {
      // uncomment below and update the code to test the property createdAt
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })

    it('should have the property updatedAt (base name: "updated_at")', function () {
      // uncomment below and update the code to test the property updatedAt
      // var instane = new Kleister.Profile();
      // expect(instance).to.be();
    })
  })
}))
