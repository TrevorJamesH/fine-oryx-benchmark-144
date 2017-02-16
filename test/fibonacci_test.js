import { expect } from 'chai'
import fibonacci from '../src/fibonacci'


describe('fibonacci()', function() {
  it('should be a function', function() {
    expect(fibonacci).to.be.a('function')
  })

  context("when given decimal 16", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',16)).to.eql('1001000')
    })
  })

  context("when given decimal 31", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',31)).to.eql('10100100')
    })
  })

  context("when given decimal 746", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',746)).to.eql('100010101000000')
    })
  })

  context("when given decimal 746698", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('decimal',746698)).to.eql('10100010010000100000001010010')
    })
  })

  context("when given a fib 1", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','1')).to.eql(1)
    })
  })

  context("when given a fib 10", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','10')).to.eql(1)
    })
  })

  context("when given a fib 11111", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','11111')).to.eql(12)
    })
  })

  context("when given a fib 1001000100110101010001", function() {
    it("should return the number converted to the other base", function() {
      expect(fibonacci('fib','1001000100110101010001')).to.eql(22788)
    })
  })

  context("when given a decimal 1234 and run twice", function() {
    it("should return the origional number", function() {
      expect(fibonacci('fib',fibonacci('decimal',1234))).to.eql(1234)
    })
  })

  context("when given a fib 10000101010010 and run twice", function() {
    it("should return the origional number", function() {
      expect(fibonacci('decimal',fibonacci('fib','1000010101010'))).to.eql('1000010101010')
    })
  })
})
