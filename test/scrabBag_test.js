import { expect } from 'chai'
import scrabBag from '../src/scrabBag'


describe('scrabBag()', function() {
  it('should be a function', function() {
    expect(scrabBag).to.be.a('function')
  })

  context("when given a string", function() {
    it("should return a list of remaining letters", function() {
      let letters = 'AERETOXMYCNS_B'
      let result =
      { '0': 'X',
        '1': 'B,C,J,K,M,Q,Y,Z,_',
        '2': 'F,H,P,V,W',
        '3': 'G,S',
        '4': 'D,L,U',
        '5': 'N,R,T',
        '7': 'O',
        '8': 'A',
        '9': 'I',
        '10': 'E' }
      expect(scrabBag(letters)).to.eql(result)
    })
  })

  context("when given a string", function() {
    it("should return a list of remaining letters", function() {
      let letters = 'TEST'
      let result =
      { '1': 'J,K,Q,X,Z',
        '2': 'B,C,F,H,M,P,V,W,Y,_',
        '3': 'G,S',
        '4': 'D,L,T,U',
        '6': 'N,R',
        '8': 'O',
        '9': 'A,I',
        '11': 'E' }
      expect(scrabBag(letters)).to.eql(result)
    })
  })

  context("when given a string with more than the total number of a character", function() {
    it("should return impossible", function() {
      let letters = 'TOO_MANY_CHARACTERS_REMOVED'
      let result = 'impossible'
      expect(scrabBag(letters)).to.eql(result)
    })
  })

  context("when given an empty string", function() {
    it("should return a list of all letters", function() {
      let letters = ''
      let result =
      { '1': 'J,K,Q,X,Z',
        '2': 'B,C,F,H,M,P,V,W,Y,_',
        '3': 'G',
        '4': 'D,L,S,U',
        '6': 'N,R,T',
        '8': 'O',
        '9': 'A,I',
        '12': 'E' }
      expect(scrabBag(letters)).to.eql(result)
    })
  })
})
