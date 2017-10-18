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
    assert.deepEqual(coSurch('a'), [ { id: 3, company: 'Abbott-Bins', phone: '1-(617)668-9817' },
  { id: 13,
    company: 'Abernathy-Schuster',
    phone: '1-(562)758-3202' },
  { id: 52, company: 'Auer and Sons', phone: '1-(717)550-2435' },
  { id: 74,
    company: 'Aufderhar, Bednar and Medhurst',
    phone: '1-(205)368-2470' } ])
  })
})
