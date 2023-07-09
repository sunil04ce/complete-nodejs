// CRUD 

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Database!');
    }
    console.log('Connected successfully!');

    const db = client.db(databaseName);
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

    db.collection('tasks').insertMany([
        {
            description: 'Shop grocessary',
            completed: false
        },
        {
            description: 'Repair Bike',
            completed: true
        },
        {
            description: 'Clean parking',
            completed: true
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!');
        }
        console.log(result.ops);
    });

});

