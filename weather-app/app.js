const geocode = require("./utils/geocode");
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (!address) {
    console.log("Please provide an Address")
} else {
    // geocode(address, (error, geocodeData) => {
    geocode(address, (error, { latitude, longtitude, location } = {}) => {
        if (error) {
            return console.log("geocode error -> " + error);
        }

        // forecast(geocodeData.location, (error, forecastData) => {
        forecast(location, (error, forecastData) => {
            if (error) {
                return console.log('forecast Error -> ', error)
            }

            // console.log("location  -> " + geocodeData.location);
            console.log("location  -> " + location);
            console.log('forecast Data -> ', forecastData)
        })

    });

    forecast(address, (error, data) => {
        console.log('forecast Error -> ', error)
        console.log('forecast Data -> ', data)
    });
}



// console.log('Starting')

// setTimeout(() => {
//     console.log('2 seconds timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 seconds timer');
// }, 0);

// console.log('Stopping')