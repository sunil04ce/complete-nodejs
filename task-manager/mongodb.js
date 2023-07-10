// CRUD 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);
// console.log(id.id.length);
// console.log(id.toHexString().length);
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Database!');
    }
    console.log('Connected successfully!');

    const db = client.db(databaseName);

    db.collection('users').updateOne({
        _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f")
    }, {
        // $set: {
        //     name: "Jack2"
        // }
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    });

    db.collection('users').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount);
    }).catch((error) => {
        console.log(error);
    })

    // db.collection('users').findOne({ name: 'Jack' }, (error, user) => {
    //     if (error) {
    //         console.log("Unable to fetch user");
    //     }
    //     console.log(user);
    // });

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     if (error) {
    //         console.log('Unable to fetch users');
    //     }
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     if (error) {
    //         console.log('Unable to fetch user count');
    //     }
    //     console.log(count);
    // });

    // db.collection('tasks').findOne({ _id: new ObjectID("5c0fec243ef6bdfbe1d62e2f") }, (error, task) => {
    //     console.log(task);
    // });

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // });

    // db.collection('users').insertOne({
    //     name: 'Jack',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 38
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 30
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!');
    //     }
    //     console.log(result.ops);

    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Shop grocessary',
    //         completed: false
    //     },
    //     {
    //         description: 'Repair Bike',
    //         completed: true
    //     },
    //     {
    //         description: 'Clean parking',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!');
    //     }
    //     console.log(result.ops);
    // });

});

