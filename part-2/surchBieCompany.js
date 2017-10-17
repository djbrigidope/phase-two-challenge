const thug = require('./clients.json')

// bds: In general, you code is formatted nicely; still, I would highly
// bds: recommend installing ESLint (https://github.com/flyrightsister/eslint-atom-install)
// bds: to standardize your formatting
// bds: I would also recommend using JSDoc (http://usejsdoc.org/about-getting-started.html)
// bds: to document your functions
const coSurch = function(input){
  // bds: better to check for input being "falsy" here: if (!input) -- that will
  // bds: cover if input is null or an empty string as well
  if(input === undefined){
    throw new Error("please enter an input agrgument like:\n 'node surchBieCompany.js hi '")
    // bds: no need to exit after throwing an error -- the program will exit if the error is not caught.
    process.exit(1);
  } else {
      const resultArray = []
      // bds: nice use of filter here :-)
      const matchedCo = thug.filter(function(thug){
      return thug.company.toLowerCase().startsWith(input.toLowerCase());
      });

      // bds: better to use .map() than a for loop here -- that will also mean
      // bds: you won't have to make an empty resultArray and push to it.
      // bds: you can chain the map() after the filter() above
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
// bds: yes, the spec said that the arguments will be passed on the cmd line
if (require.main === module) {
  // bds: better to define process.argv[2] as a variable, for readability
  // bds: Also: what if someone entered a two or three word company start?
  console.log(coSurch(process.argv[2]));
}

module.exports = coSurch;
