const fs = require('fs');
fs.writeFileSync("notes.txt", "This file was created by NodeJs");
fs.appendFileSync("notes.txt", " using VS code");