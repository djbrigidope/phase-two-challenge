const thug = require('./clients.json')

const coSurch = function(input){
  if(input === undefined){
    throw new Error("please enter an input agrgument like:\n 'node surchBieCompany.js hi '")
    process.exit(1);
  } else {
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
    }
};
// where are we passing arguments from ? test of command line ?
if (require.main === module) {
  console.log(coSurch(process.argv[2]));
}

module.exports = coSurch;
