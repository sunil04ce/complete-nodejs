require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('64b3e2e9f6af8f0140d84eca', { age: 1 }).then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})