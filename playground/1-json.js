const fs = require('fs');

const book = {
    title: "Ego is the Enemy",
    author: "Ryan Moliday",
}

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
console.log(dataBuffer.toString());
const data = JSON.parse(dataBuffer.toString());
console.log(data.name);

data.name = "Jack";
data.age = 37;

fs.writeFileSync('1-json.json', JSON.stringify(data));