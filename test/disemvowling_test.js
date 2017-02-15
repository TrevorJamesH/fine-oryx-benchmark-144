import { expect } from 'chai'
import disemvowling from '../src/disemvowling'


describe.only('disemvowling()', function() {
  it('should be a function', function() {
    expect(disemvowling).to.be.a('function')
  })

  context("When given the sentence i am groot", function() {
    it("should return only the consinants mgrt", function() {
      expect(disemvowling('i am groot')).to.eql('mgrt')
    })
  })

  context("When given the sentence i dare not go where the watermelons grow", function() {
    it("should return only the consinants mgrt", function() {
      expect(disemvowling('i dare not go where the watermelons grow')).to.eql('drntgwhrthwtrmlnsgrw')
    })
  })
})
