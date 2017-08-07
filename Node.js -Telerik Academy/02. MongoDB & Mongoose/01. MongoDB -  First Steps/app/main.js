"use strict";
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const protocol = 'mongodb:/';
const server = 'localhost:27017';
const databaseName = 'Students';

const connectionString = `mongodb://localhost:27017/chat`;

MongoClient.connect(connectionString)
    .then((databaseConnection) => {
        databaseConnection.collection('Names')
            .insert({
                firstName: 'Ivan',
                lastName: 'Petrov',
                age: '30'
            })
            .then((result) => {
                console.log(result);
            });
        console.log('works');
    })
    .catch((error) => {
        console.log(error);
    })