import { expect } from 'chai'
import symlinks from '../src/symlinks'


describe.only('symlinks()', function() {
  it('should be a function', function() {
    expect(symlinks).to.be.a('function')
  })

  context("when given symbolic links", function() {
    it("should return a resolved actual path", function() {
      expect(symlinks('/home/private/documents:/stuff/urgent/docs',
      '/home/private/documents/office'))
      .to.eql('/stuff/urgent/docs/office')
    })

    it("should return a resolved actual path", function() {
      expect(symlinks('/bin:/usr/bin',
      '/usr/bin:/usr/local/bin',
      '/usr/local/bin/log:/var/log-2017',
      '/bin/log/lib'))
      .to.eql('/var/log-2017/lib')
    })
  })
})
