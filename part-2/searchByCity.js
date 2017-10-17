const city = process.argv[2];
const fs = require('fs');
const clients = fs.readFileSync('./clients.json');
const parsedClients = JSON.parse(clients);
// console.log(typeof parsedClients);

const citySearch = city => {
  let matchingCities = parsedClients.filter(obj => obj.city.toLowerCase() === city.toLowerCase()) //the magic



  let cityResults = matchingCities.map(obj => ({
    'id': obj.id,
    'rep_name': obj.rep_name,
    'company': obj.company,
    'city': obj.city,
    'state': obj.state
  }))



  console.log(cityResults)
}

citySearch(city)
