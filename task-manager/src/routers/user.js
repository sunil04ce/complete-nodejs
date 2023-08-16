const express = require('express');
const router = new express.Router();
const multer = require('multer');
const sharp = require('sharp');
const auth = require('../middleware/auth');
const User = require('../models/user');

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (error) {
        res.status(400).send();
    }
})

// router.get('/users', auth, async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.send(users);
//     } catch (error) {
//         res.status(500).send();
//     }
// })

router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        });
        await req.user.save();

        res.send();
    } catch (error) {
        res.status(500).send();
    }
});

router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
})

// router.get('/users/:id', async (req, res) => {
//     const _id = req.params.id;
//     try {
//         const user = await User.findById(_id);
//         if (!user) {
//             return res.status(404).send()
//         }
//         res.send(user);
//     } catch (error) {
//         res.status(500).send();
//     }
// })

// router.patch('/users/:id', async (req, res) => {
router.patch('/users/me', auth, async (req, res) => {

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

        const user = req.user; //await User.findById(req.params.id);
        updates.forEach((update) => {
            user[update] = req.body[update]
        });
        user.save();

        // if (!user) {
        //     return res.status(404).send();
        // }

        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
})

// router.delete('/users/:id', async (req, res) => {
router.delete('/users/me', auth, async (req, res) => {
    try {
        // const user = await User.findByIdAndDelete(req.params.id);
        // const user = await User.findByIdAndDelete(req.user._id);
        // if (!user) {
        //     return res.status(404).send();
        // }

        await req.user.deleteOne();
        res.send(req.user);
    } catch (error) {
        console.log(error);
        res.status(500).send();
    }
})

const upload = multer({
    // dest: 'avatars',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image file'));
        }
        cb(undefined, true);
    }

});

router.post('/users/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    // req.user.avatar = req.file.buffer;
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer();
    req.user.avatar = buffer;
    await req.user.save();
    res.send();
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message });
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined;
    await req.user.save();
    res.send();
})

router.get('/users/:id/avatar', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (!user || !user.avatar) {
            throw new Error();
        }

        res.set('Content-Type', 'image/png');
        res.send(user.avatar);
    } catch (error) {
        res.status(404).send();
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




