const express = require('express');
const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.send(tasks)
    } catch (error) {
        res.status(500).send()
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isAllowedOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    })

    if (!isAllowedOperation) {
        return res.status(400).send({ error: 'Invalid Task Updates!' });
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (error) {
        res.status(500).send();
    }
})

module.exports = router;


// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body);
//     task.save().then(() => {
//         res.status(201).send(task)
//     }).catch((error) => {
//         res.status(400).send(error)
//     });
// })

// app.get('/tasks', (req, res) => {
//     Task.find({}).then((tasks) => {
//         res.send(tasks)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id;

//     Task.findById(_id).then((task) => {
//         if (!task) {
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })