const geocode = require("./utils/geocode");
const forecast = require('./utils/forecast');

// geocode("New York", (error, data) => {
//     console.log("geocode error -> " + error);
//     console.log("geocode data -> " + data);
// });

forecast("New York", (error, data) => {
    console.log('forecast Error -> ', error)
    console.log('forecast Data -> ', data)
})


// console.log('Starting')

// setTimeout(() => {
//     console.log('2 seconds timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 seconds timer');
// }, 0);

// console.log('Stopping')