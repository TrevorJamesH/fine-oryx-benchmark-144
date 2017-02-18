import { expect } from 'chai'
import whereInJson from '../src/whereInJson'


describe('whereInJson()', function() {
  it('should be a function', function() {
    expect(whereInJson).to.be.a('function')
  })

  context("when given a json and a value", function() {
    it("should return the word and the index of the number", function() {
      const json = {
                      "name": "William Shakespeare",
                      "dead" : true,
                      "works" : [
                          {
                              "name" : "Romeo and Juliet",
                              "published" : 1591,
                              "isAwesome" : true
                          },
                          {
                              "name" : "Richard III",
                              "published" : 1592,
                              "isAwesome" : false
                          }
                      ],
                      "favoriteSites" : [
                          "tumblr",
                          "4chan"
                      ]
                    }
      const key = 'tumblr'
      expect(whereInJson(json,key)).to.eql('favoriteSites -> 0')
    })
  })

  context("when given a json and a value", function() {
    it("should return the word and the index of the number", function() {
      const json = {
                      "name": "William Shakespeare",
                      "dead" : true,
                      "works" : [
                          {
                              "name" : "Romeo and Juliet",
                              "published" : 1591,
                              "isAwesome" : true
                          },
                          {
                              "name" : "Richard III",
                              "published" : 1592,
                              "isAwesome" : false
                          }
                      ],
                      "favoriteSites" : [
                          "tumblr",
                          "4chan"
                      ]
                    }
      const key = "Richard III"
      expect(whereInJson(json,key)).to.eql('works -> 1 -> name')
    })
  })

  context("when given a json and a value that is not in the json", function() {
    it("should return Not Found", function() {
      const json = {
                      "name": "William Shakespeare",
                      "dead" : true,
                      "works" : [
                          {
                              "name" : "Romeo and Juliet",
                              "published" : 1591,
                              "isAwesome" : true
                          },
                          {
                              "name" : "Richard III",
                              "published" : 1592,
                              "isAwesome" : false
                          }
                      ],
                      "favoriteSites" : [
                          "tumblr",
                          "4chan"
                      ]
                    }
      const key = "Buttered Toast"
      expect(whereInJson(json,key)).to.eql('Not Found')
    })
  })
})
