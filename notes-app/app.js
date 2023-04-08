// const fs = require('fs');
// fs.writeFileSync("notes.txt", "This file was created by NodeJs");
// fs.appendFileSync("notes.txt", " using VS code");

// const validator = require('validator');
// const add = require('./utils.js');
const notes = require('./notes.js');
// const chalk = require('chalk');
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
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
        notes.addNote(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        console.log('Removing a new note.')
        notes.removeNote(argv.title);
    }
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes();
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
        console.log('Reading a note.');
        notes.readNote(argv.title);
    }
});

yargs.parse();

// console.log(yargs.argv);

// const command = process.argv[2];

// if (command === 'add') {
//     console.log('Adding note!');
// } else if (command === 'remove') {
//     console.log('Removing note!');
// }