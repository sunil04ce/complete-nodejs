// const fs = require('fs');
// fs.writeFileSync("notes.txt", "This file was created by NodeJs");
// fs.appendFileSync("notes.txt", " using VS code");

const validator = require('validator');
const add = require('./utils.js');
const getNotes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

// console.log(add(3, 2));
// console.log(getNotes());
// console.log(validator.isEmail('jack@gmail.com'));
// console.log(validator.isURL('https://www.google.com'));
// console.log(chalk.bold.green('Success!'));
// console.log(chalk.green.inverse('Very good...'));
// console.log(chalk.yellow('Failed', chalk.underline.bgBlue('Try again')));
// console.log(chalk.black.bold.bgMagenta('Good Luck'));

// console.log(process.argv);

// customize yargs version
yargs.version('1.1.0');

// create add command

console.log(yargs.argv);

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding note!');
} else if (command === 'remove') {
    console.log('Removing note!');
}