const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.send(user);
    } catch (error) {
        res.status(400).send();
    }
})

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send();
    }
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).send()
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
})

router.patch('/users/:id', async (req, res) => {

    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    });

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid user updates!' });
    }

    try {
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        const user = await User.findById(req.params.id);
        updates.forEach((update) => {
            user[update] = req.body[update]
        });
        user.save();

        if (!user) {
            return res.status(404).send();
        }

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send();
    }
})

module.exports = router;

// app.post('/users', (req, res) => {
//     // console.log(req.body);
//     // res.send('testing');

//     const user = new User(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((error) => {
//         // res.send(e)
//         res.status(400).send(error)
//     });
// })

// app.get('/users', (req, res) => {
//     User.find({}).then((users) => {
//         res.send(users)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })

// app.get('/users/:id', (req, res) => {
//     // console.log(req.params);
//     const _id = req.params.id;

//     User.findById(_id).then((user) => {
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((error) => {
//         res.status(500).send()
//     })
// })




