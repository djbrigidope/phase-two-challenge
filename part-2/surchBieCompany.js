// const company = process.argv[2]
const thug = require('./clients.json')
let input = process.argv[2];
// console.log(thug);
// console.log(typeof thug);

const coSurch = function(input){
  const result = {}

  let matchedCo = thug.filter(function(thug){
  return thug.company.toLowerCase().startsWith(input.toLowerCase());
  });
  console.log('matchedCo:::', matchedCo);

  let soughtCompany = matchedCo.forEach(function(){
    console.log('high:::',  matchedCo[0]);
    result.id = matchedCo[0].id
    result.company = matchedCo[0].company
    result.phone = matchedCo[0].phone

  });
  return result;
  // console.log(soughtCo);
  // console.log(typeof matchedCo);
};

console.log(coSurch(input));
