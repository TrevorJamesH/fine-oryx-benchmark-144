import { expect } from 'chai'
import stringIndices from '../src/stringIndices'


describe('stringIndices()', function() {
  it('should be a function', function() {
    expect(stringIndices).to.be.a('function')
  })

  context("when given a string and a number", function() {
    it("should return the word and the index of the number", function() {
      expect(stringIndices('Catch me outside, how about that?',3)).to.eql('outside')
    })
  })

  context("when given a string and a number", function() {
    it("should return the word and the index of the number", function() {
      expect(stringIndices('Groceries: milk, eggs, orange juice, fish',5)).to.eql('juice')
    })
  })

  context("when given a string and a number higher than the number of words in the sentence", function() {
    it("should return undefined", function() {
      expect(stringIndices('Catch me outside, how about that?',7)).to.eql(undefined)
    })
  })
})
