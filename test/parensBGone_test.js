import { expect } from 'chai'
import parensBGone from '../src/parensBGone'

describe('parensBGone()', function() {
  it('should be a function', function() {
    expect(parensBGone).to.be.a('function')
  })

  context("given a string with extra parens", function() {


    it("should return the string with only the extra parens removed", function() {

      expect(parensBGone('((1((23)(45)))6)')).to.eql('((1((23)(45)))6)')
    })
    it("should return the string with only the extra parens removed", function() {

      expect(parensBGone('(((1234)(((5)67))))')).to.eql('((1234)((5)67))')
    })
    it("should return the string with only the extra parens removed", function() {

      expect(parensBGone('12((3))')).to.eql('12(3)')
    })

    it("should return the string with only the extra parens removed", function() {

      expect(parensBGone('12(((((((((((3)))))))))))')).to.eql('12(3)')
    })
  })
})
