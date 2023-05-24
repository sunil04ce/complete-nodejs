const request = require('request');
const geocode = require("./utils/geocode");

const url = 'http://api.weatherstack.com/current?access_key=38111959c2b6a0c576cd949543624f11&query=New%20York';

request({ url: url, json: true }, (error, response) => {

    if (error) {
        console.log("Unable to connect weather service!");
    } else if (response.body.error) {
        console.log("Unable to find the location"); //(response.body.error.info);
    } else {
        // const data = JSON.parse(response.body);
        // console.log(data.current);
        console.log(response.body);
        //if (response.body.success) {
        console.log(response.body.current.weather_descriptions[0] + ", There is " + response.body.current.temperature + " degrees temperature and fillslike temperature is " + response.body.current.feelslike + " degrees");
        //}
    }
});



// request({ url: geocodeURL, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect location service!');
//     } else if (response.body.features.length === 0) {
//         console.log("Unable to find location, Try another search.")
//     } else {
//         console.log(response.body);
//         const longtitude = response.body.features[0].center[0];
//         const latitude = response.body.features[0].center[1];
//         console.log(longtitude, latitude);
//     }
// });



geocode("New York", (error, data) => {
    console.log("error -> " + error);
    console.log("data -> " + data);
});



// console.log('Starting')

// setTimeout(() => {
//     console.log('2 seconds timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 seconds timer');
// }, 0);

// console.log('Stopping')