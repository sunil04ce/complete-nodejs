const fs = require('fs');
const chalk = require('chalk');

// console.log('from notes.js..');

const addNote = (title, body) => {
    const notes = loadNotes();

    // const duplicateNotes = notes.filter((note) => note.title === title);
    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });

        saveNotes(notes);
        console.log(chalk.green.inverse('Note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const remainingNotes = notes.filter((note) => note.title !== title)

    if (remainingNotes.length < notes.length) {
        saveNotes(remainingNotes);
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

const saveNotes = (notes) => {
    // console.log(notes);

    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.magenta.inverse('Your notes'));
    notes.forEach(note => {
        console.log(chalk.yellow(note.title));
    });
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const existingNote = notes.find((note) => note.title === title);

    if (existingNote) {
        console.log(chalk.gray.inverse(existingNote.title));
        console.log(existingNote.body);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}