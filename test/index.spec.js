/* global describe, it */

import mock from 'xhr-mock'
// import sinon from 'sinon'
import assert from 'assert'

import KleisterClient from '../src/index'

mock.setup()

describe('Kleister Client', () => {
  describe('dummy', () => {
    it('fake works as expected', () => {
      let client = new KleisterClient()

      assert(client !== undefined)
    })
  })
})
