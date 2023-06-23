const path = require('path');
const express = require('express');
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

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        forcast: "It is snowing",
        location: 'New York'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});