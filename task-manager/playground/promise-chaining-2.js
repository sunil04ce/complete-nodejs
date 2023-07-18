require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('64b41ef9308324f65a310271').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})