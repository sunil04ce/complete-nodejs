const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

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