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
    instance = new Kleister.ForgeApi()
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

  describe('ForgeApi', function () {
    describe('appendForgeToBuild', function () {
      it('should call appendForgeToBuild successfully', function (done) {
        // uncomment below and update the code to test appendForgeToBuild
        // instance.appendForgeToBuild(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
    describe('deleteForgeFromBuild', function () {
      it('should call deleteForgeFromBuild successfully', function (done) {
        // uncomment below and update the code to test deleteForgeFromBuild
        // instance.deleteForgeFromBuild(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
    describe('listForgeBuilds', function () {
      it('should call listForgeBuilds successfully', function (done) {
        // uncomment below and update the code to test listForgeBuilds
        // instance.listForgeBuilds(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
    describe('listForges', function () {
      it('should call listForges successfully', function (done) {
        // uncomment below and update the code to test listForges
        // instance.listForges(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
    describe('searchForges', function () {
      it('should call searchForges successfully', function (done) {
        // uncomment below and update the code to test searchForges
        // instance.searchForges(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
    describe('updateForge', function () {
      it('should call updateForge successfully', function (done) {
        // uncomment below and update the code to test updateForge
        // instance.updateForge(function(error) {
        //  if (error) throw error;
        // expect().to.be();
        // });
        done()
      })
    })
  })
}))
