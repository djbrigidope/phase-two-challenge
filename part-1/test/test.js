const expect = require('chai').expect;
const { month, reverseSentence, nameProps, filterBetween } = require('../function.js');

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
  });
});


describe('reverseSentence',()=>{
  it('should be a function',()=>{
    expect(reverseSentence).to.be.a('function');
  });

  it('takes a sentence and returns the reverse',()=>{
    let string = 'high there';
    expect(reverseSentence(string)).to.equal('there high');
  });

  it('should throw an error if string is not a string',()=>{
    let string = 4164743123;
    expect(reverseSentence.bind(string)).to.throw(Error);
  });
});

describe('nameProps',()=>{
  it('should be a function',()=>{
    expect(nameProps).to.be.a('function');
  });

   it('returns an array',()=>{
     let freshWhipz = {acura: "NSX", nissan: "GTR", porsche: 944};
     expect(nameProps(freshWhipz)).to.be.a('array');
   });

   it('should throw error if not object',()=>{
     let freshWhipz = 'acura: "NSX", nissan: "GTR", porsche: 944';
     expect(nameProps.bind(freshWhipz)).to.throw(Error);
   });
});


describe('filterBetween',()=>{
  it('should be a function',()=>{
    expect(filterBetween).to.be.a('function');
  });
  it('it should take an array or throw an error',()=>{
    let thugString = 'thugnificent 1337 hax0r';
    expect(filterBetween.bind(thugString)).to.throw(Error);
  });

  it('returns a filtered array when given array',()=>{
    let thugsRus = ['cat toy', 'dog toy', 'rocket toy', 'sewing toy'];
    expect(filterBetween.bind(thugsRus)).to.be('array');
  });

});
