"use strict";
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'Students';

const connectionString = `mongodb://localhost:27017/chat`;

const connectionPromis = MongoClient.connect(connectionString);

//Insert data to DB
/*connection.then((databaseConnection) => {
    databaseConnection.collection('Names')
        .insert({
            firstName: 'Ivan Georgiev',
            lastName: 'Petrov',
            age: 30
        })
        .then((result) => {
            console.log(result);
        });
    console.log('works');
})
.catch((error) => {
    console.log(error);
})*/

//Cached DB
let cacheDb = null;

connectionPromis.then((db) => {
    return db;
}).then((db) => {
    const names = db.collection('Names')
        .find({})
        .toArray()
        .then((result) => {
            console.log(result);
        });
})