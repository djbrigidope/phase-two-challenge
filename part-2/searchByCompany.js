const fs = require('fs');
const clients = fs.readFileSync('./clients.json').toString();
const clientObj = JSON.parse(clients);
// console.log(clientObj);
// console.log(typeof clientObj);
const input = process.argv[2];


function companySearch(company) {
  console.log('lookin fer a client with a company... kinda like...' + company);

  let matchedClient = clientObj.filter(obj => obj.model.toLowerCase()); //returns an array
  console.log(matchedClient);

  let client = matchedClient.map();

};

companySearch()
