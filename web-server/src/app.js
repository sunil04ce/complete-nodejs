const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

//console.log(__dirname);
//console.log(path.join(__dirname, '../public/index.html'));

// app.get('', (req, res) => {
//     res.send(publicDirPath);
// });

// app.get('/help', (req, res) => {
//     res.send([{
//         name: 'Jack',
//         age: 37
//     },
//     {
//         name: 'Sara',
//         age: 30
//     }]);
// });

// app.get('/about', (req, res) => {
//     res.send('<h1>About</h1>');
// });

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup static diretory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: "Weather App",
        name: "Jack Jee"
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Jack Jee"
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Jack Jee",
        helpText: "You can contact on our email: help@gmail.com"
    });
});

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: "You must provide an address."
        })
    }

    res.send({
        forcast: "It is snowing",
        location: 'New York',
        address: req.query.address
    });
});

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "You must provide a search term"
        });
    }

    console.log(req.query);
    console.log(req.query.search);
    res.send({
        products: []
    });
});

app.get('/help/*', (req, res) => {
    // res.send('Help article not found');
    res.render('404', {
        title: "404",
        name: "Jack Jee",
        errorMessage: "Help article not found."
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: "404",
        name: "Jack Jee",
        errorMessage: "Page not found."
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});