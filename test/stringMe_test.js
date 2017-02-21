import { expect } from 'chai'
import stringMe from '../src/stringMe'

describe.only('stringMe()', function() {
  it('should be a function', function() {
    expect(stringMe).to.be.a('function')
  })

  context("when given a string", function() {
    it("should return the longest substring that contains a maximum of two unique characters", function() {
      expect(stringMe('ghhiiii')).to.eql('hhiiii')
    })
  })

  context("when given a string", function() {
    it("should return the longest substring that contains a maximum of two unique characters", function() {
      expect(stringMe('efgefghiiikk')).to.eql('iiikk')
    })
  })
})
