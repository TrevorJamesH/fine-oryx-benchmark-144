import { expect } from 'chai'
import lairotcaf from '../src/lairotcaf'

describe('lairotcaf()', function() {
  it('should be a function', function() {
    expect(lairotcaf).to.be.a('function')
  })

  context("given an number", function() {


    it("should return the referse factorial if there is one", function() {

      expect(lairotcaf(720)).to.eql(6)
    })

    it("should return NONE if there is not one", function() {

      expect(lairotcaf(37)).to.eql('NONE')
    })
  })
})
