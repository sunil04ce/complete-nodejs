const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=6af0218b9dcd82a572d8a9d42adf939a&query=23.1061874617057,%2072.54090099867204';

request({ url: url, json: true }, (error, response) => {
    // const data = JSON.parse(response.body);
    // console.log(data.current);
    console.log(response.body);
    if (response.body.success) {
        console.log(response.body.current.weather_descriptions[0] + ", There is " + response.body.current.temperature + " degrees temperature and fillslike temperature is " + response.body.current.feelslike + " degrees");
    }


});

// console.log('Starting')

// setTimeout(() => {
//     console.log('2 seconds timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 seconds timer');
// }, 0);

// console.log('Stopping')