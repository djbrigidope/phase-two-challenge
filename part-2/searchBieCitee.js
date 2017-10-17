const input = process.argv[2];
const clients = require('./clients.json');
// console.log(typeof clients); object
// console.log(clients);

if(input === undefined){
  console.log('please enter secret handshake');
  process.exit(1);
}

const cityMatch = clients.filter(function(){
  clients.city.toLowerCase() === input.toLowerCase();
  
})

console.log(cityMatch);


//id
//rep_name
//company
//no_employees
//phone
//city
//state
//created_at
