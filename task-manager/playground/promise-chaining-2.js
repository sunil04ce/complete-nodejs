require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('64b41ef9308324f65a310271').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('64b41d0917e58573dd825389').then((count) => {
    console.log('Deleted count : ', count);
}).catch((error) => {
    console.log(error);
})