const assert = require('chai').assert;
const coSurch = require('../surchBieCompany.js')

describe('coSurch',function(){
  it('throws an error if input is undefined', function(){
    assert.throws(function(){
      coSurch( );
    })
    Error, "please enter an input agrgument like:\n 'node surchBieCompany.js hi '"
  })

  it('returns an array of objects that matches the letters of the arguments passed to it. ', function(){
    
  })
})
