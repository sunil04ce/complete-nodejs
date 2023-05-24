const request = require('request');

// ------------- Callback abstraction -------------
const geocode = (address, callback) => {
    const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1`

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect location service!', undefined);
        } else if (response.body.features.length === 0) {
            callback("Unable to find location, Try another search.", undefined);
        } else {
            // console.log(response.body);
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longtitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name,
            });
        }
    });
}

module.exports = geocode;