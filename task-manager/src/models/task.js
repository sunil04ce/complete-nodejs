const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = Task;

// const taskOne = new Task({
//     // description: 'Learn Nodejs course',
//     // completed: false
//     description: '   Learn ReactJS course',
// })

// taskOne.save().then(() => {
//     console.log(taskOne);
// }).catch((error) => {
//     console.log('Error!', error)
// })