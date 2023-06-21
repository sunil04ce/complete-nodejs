const { error } = require('console');
const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=4657ecea9b7f6ffe1d664fd01296f6b1&query=${encodeURIComponent("New York")}`;

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });
    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

request.on('error', (error) => {
    console.log('An error', error);
});

request.end();