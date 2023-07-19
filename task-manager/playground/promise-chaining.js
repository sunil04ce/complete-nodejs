require('../src/db/mongoose');
const User = require('../src/models/user');

// User.findByIdAndUpdate('64b3e2e9f6af8f0140d84eca', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAgeAndCount('64b4170481fc038276bbd7d4', 2).then((count) => {
    console.log(count);
}).catch((error) => {
    console.log(error);
});