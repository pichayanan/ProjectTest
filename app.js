 const say = require ('say');
 
//say.stop()

const axios = require('axios')
const apiURL = "api.openweathermap.org/data/2.5/weather?q=";
const city = "Phuket";
const appID = "7430b7e61b2cbe834292e06e2cf07aa2";
const url = `http://${apiURL}${city}&appid=${appID}`;
console.log(url);
// axios.get(url)                     
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//     say.speak(`${city} weather is ${response.data.weather[0].description}`, 'Alex')
//     console.log("Finished"); 
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   });
 getsayweather();

 async function getsayweather(){

    const response = await axios.get(url);
    console.log(response.data);
    say.speak(`${city} current weather is ${response.data.weather[0].description}`, 'Alex')
    console.log("Finished"); 

 }

