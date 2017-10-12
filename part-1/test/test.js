const assert = require('chai').assert;
const { month, reverseSentence, nameProps, filterBetween } = require('../function.js');

describe('month',()=>{
  it('month is a function',()=>{
    let halloween = new Date(2017, 9, 31)
    assert.equal(month(halloween), 'Oct')
  })

  it('throws an error for an invalid input.', function() {
    assert.throws(function() {
      month('1')
    },
      TypeError, 'plaese to pass date object'
    )
  })
})


describe('reverseSentence', function(){
  it('returns the reverse of the inputteddedd sentence', function(){
    assert.equal(reverseSentence('there high'), 'high there')
  })

  it('throws an error for invalid input type', function(){
    assert.throws(function(){
      reverseSentence(23637)
    },
      Error,'please to use "quotes" and sentence w spaces'
    )
    })
  })

describe('nameProps', function(){
  it('gets the keys of an object', function(){
    let cashMoney = {
      hotBoys: 'juve, lil wayne, bg, turk',
      bigTymers: 'Baby, mannie fresh',
      youngMoney: 'drake, nikki minaj, dj khaled'
    }
    assert.deepEqual(nameProps(cashMoney), ["hotBoys", "bigTymers", "youngMoney"])
    // assert.equal(nameProps(cashMoney), ['hotBoys', 'bigTymers', 'youngMoney'])
  })
  it('throws an error if the input is not an object or array', function(){
      let cashMoney2 = "hotBoys: 'juve, lil wayne, bg, turk', bigTymers: 'Baby, mannie fresh', youngMoney: 'drake, nikki minaj, dj khaled'"
      assert.throws(function(){
        nameProps(cashMoney2)
      },
    Error,'gimmie obj blud'
  )
  })
})


describe('filterBetween', function(){
  it('throws an error if input is not array', function(){
      let radioBar = 443322
      assert.throws(function(){
        filterBetween(radioBar)
      },
    Error, 'gimmie array blud'
  )
});

  it('returns a filtered array', function(){

    let arr2 = ['dog', 'cat', 'zebra', 'ape', 'lion', 'cow']

    assert.deepEqual(filterBetween(arr2, 'chimp', 'lobster'),[ 'dog', 'lion', 'cow' ])

  })
})
