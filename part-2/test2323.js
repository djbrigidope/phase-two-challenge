describe('repeat3x',()=>{
  it('returns a repeated string',()=>{
    let str = "helllo";
    repeat3x(str);
    expect(repeat3x(str)).to.equal('helllohelllohelllo');
  })
})


describe('reverseSentence',()=>{
  it.only('should be a function',()=>{
    expect(reverseSentence).to.be.a('function');
  });

  it.only('takes a sentence and returns the reverse',()=>{
    let string = 'high there';
    expect(reverseSentence(string)).to.equal('there high');
  });

  it.only('should throw an error if string is not a string',()=>{
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
     let array = [1,2,3,4]
    //  let freshWhipz = 'acura: "NSX", nissan: "GTR", porsche: 944';
     expect(nameProps(array)).to.throw(Error);
   });
});


describe('filterBetween',()=>{
  it('should be a function',()=>{
    expect(filterBetween).to.be.a('function');
  })
  it('it should take an array or throw an error',()=>{
    let thugString = 'thugnificent 1337 hax0r';
    expect(filterBetween.bind(thugString)).to.throw(Error);
  })

  it('returns a filtered array when given array',()=>{
    let thugsRus = ['cat toy', 'dog toy', 'rocket toy', 'sewing toy'];
    expect(filterBetween.bind(thugsRus)).to.be('array');
  })

})
