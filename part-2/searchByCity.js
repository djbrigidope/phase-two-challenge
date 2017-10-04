const city = process.argv[2];
const fs = require('fs');
const clients = fs.readFileSync('./clients.json'.toString());
const parsedClients = JSON.parse(clients);
console.log(parsedClients);
