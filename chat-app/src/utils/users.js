const users = [];

const addUser = ({ id, username, room }) => {
    // Clean the data
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    // Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username;
    })

    // Validate username
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // Store user
    const user = { id, username, room };
    users.push(user);
    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id);
}

const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase();
    return users.filter((user) => user.room === room);
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

// addUser({
//     id: 1,
//     username: 'jack',
//     room: 'abc'
// })

// addUser({
//     id: 20,
//     username: 'mike',
//     room: 'abc'
// })

// addUser({
//     id: 21,
//     username: 'jess',
//     room: 'abc'
// })

// addUser({
//     id: 22,
//     username: 'jack',
//     room: 'xyz'
// })

// console.log(users);

// console.log('user -> ', getUser(21));
// console.log('users -> ', getUsersInRoom('abc'));



// const test1 = addUser({
//     id: 2,
//     username: '',
//     room: ''
// })

// console.log(test1);

// const test2 = addUser({
//     id: 3,
//     username: 'jack',
//     room: 'abc'
// })

// console.log(test2);

// const removedUser = removeUser(1);
// console.log('Removed User : ', removedUser);
// console.log(users);
