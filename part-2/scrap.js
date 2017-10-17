const citySearch = function(clients){
  if(input === undefined || input === typeof number){
    // regex?
      console.log("please enter secret method");
      process.exit(1);
  } else {
      const matchedCitee = clients.filter(function(){
      clients.city.toLowerCase() === input.toLowerCase()});

        // console.log(matchedCitee)
        // console.log(typeof matchedCitee)
        // console.log(typeof cityResults);

      console.log(matchedCitee);

      console.log('inside');
  }
}


console.log(citySearch(input));
