const input = process.argv[2]
const fs = require('fs')
const clientData = fs.readFileSync('./clients.json'.toString())
const parsedData = JSON.parse(clientData)


const companySearch = (company) => {
  let matchingCompanies = parsedData.filter(obj => obj.company.toLowerCase().startsWith(company.toLowerCase()) === true); // the magic

  let companyResults = matchingCompanies.map(obj => ({
    "id": obj.id,
    "company": obj.company,
    "phone": obj.phone
  }));



  console.log(companyResults)
}

companySearch(input)
