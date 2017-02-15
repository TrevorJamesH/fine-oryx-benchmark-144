import { expect } from 'chai'
import fibonacci from '../src/fibonacci'


describe('fibonacci()', function() {
  it('should be a function', function() {
    expect(fibonacci).to.be.a('function')
  })

  context("when given a base, either base fib, or decimal", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',16)).to.eql('1001000')
    })
  })

  context("when given a base, either base fib, or decimal", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',31)).to.eql('10100100')
    })
  })

  context("when given a base, either base fib, or decimal", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','1')).to.eql(1)
    })
  })

  context("when given a base, either base fib, or decimal", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','10')).to.eql(1)
    })
  })

  context("when given a base, either base fib, or decimal", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','11111')).to.eql(12)
    })
  })
})
