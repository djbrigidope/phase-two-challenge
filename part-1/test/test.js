const expect = require('chai').expect;
const month = require('../function.js');

describe('month',()=>{
  it('should be a function',()=>{
    expect(month).to.be.a('function');
  });
  it('returns the month when provided a date',()=>{
    let date = new Date( '1980, 08, 19' )
    expect( month( date ) ).to.equal( 'Aug' );
  });
  it('should throw an error if date is not entered in correct format',()=>{
    let date = new Date ('August, 19, 1980');
    expect(month.bind(date)).to.throw(Error);
  })
})
