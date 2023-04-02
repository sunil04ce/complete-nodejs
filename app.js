// const fs = require('fs');
// fs.writeFileSync("notes.txt", "This file was created by NodeJs");
// fs.appendFileSync("notes.txt", " using VS code");

const add = require('./utils.js');
const getNotes = require('./notes.js');

console.log(add(3, 2));
console.log(getNotes());