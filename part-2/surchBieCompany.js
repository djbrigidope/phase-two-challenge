const plug = require('./clients.json')
const input = process.argv[2]

const coSurch = function(input){
  if(!input){
    throw new Error("please enter an input agrgument like:\n 'node surchBieCompany.js hi '")
  } else {
      const matchedCo = plug
        .filter(function(plug){
          return plug.company.toLowerCase().startsWith(input.toLowerCase());
        })
        .map(function(plug){
          return {'id': plug.id, 'company': plug.company, 'phone': plug.phone}
        })

        return(matchedCo)
    };
};
// where are we passing arguments from ? test of command line ?
if (require.main === module) {
  console.log(coSurch(input));
}

module.exports = coSurch;
