const request = require('request');

const forecast = (address, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=33ccfdbc6248dd8a703b5d81adb8093e&query=${encodeURIComponent(address)}`;
    //request({ url: url, json: true }, (error, response) => {
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback("Unable to connect weather service!", undefined);
            // } else if (response.body.error) {
        } else if (body.error) {
            callback("Unable to find the location", undefined); //(response.body.error.info);
        } else {
            // const data = JSON.parse(response.body);
            // console.log(data.current);
            console.log(body);
            // const data = response.body.current.weather_descriptions[0] + ", There is " + response.body.current.temperature + " degrees temperature and fillslike temperature is " + response.body.current.feelslike + " degrees";
            const data = body.current.weather_descriptions[0] + ", There is " + body.current.temperature + " degrees temperature and fillslike temperature is " + body.current.feelslike + " degrees";
            callback(undefined, data);
        }
    });
}


module.exports = forecast;