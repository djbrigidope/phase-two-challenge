const thug = require('./clients.json')
let input = process.argv[2];


const coSurch = function(input){
  const resultArray = []
  const matchedCo = thug.filter(function(thug){
  return thug.company.toLowerCase().startsWith(input.toLowerCase());
  });

  for (var index = 0; index < matchedCo.length; index++) {
    const resultObject = {}

    resultObject.id = matchedCo[index].id
    resultObject.company = matchedCo[index].company
    resultObject.phone = matchedCo[index].phone

    resultArray.push(resultObject)
  };
  return resultArray;

};

console.log(coSurch(input));
