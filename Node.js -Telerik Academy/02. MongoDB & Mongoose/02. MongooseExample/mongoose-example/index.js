'use strict'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chat');

// Get notified for the connection status
const db = mongoose.connection;

db.on('error', (err) => {
    console.log("Connection Error\n" + err);
});
db.on('open', () => {
    console.log("Connect successfully");
});

// ===================================
//            Using Schemas
// ===================================
/*
const modelSchema = mongoose.Schema({
    model: String,
    releaseDate: Date,
    priceInDolors: Number,
    displaySizeInInches: Number
});
const modelName = 'Laptop';

const Laptop = mongoose.model(modelName, modelSchema);

const asus = new Laptop({
    model: 'Asus G752',
    releaseDate: new Date(2016, 10, 29),
    priceInDolors: 1799,
    displaySizeInInches: 17.3
});

asus.save((err, entry, numAffected) => {
    console.log(entry);
    console.log(numAffected);
});
*/

// =========================================
//          Using instance methods
// =========================================
const laptopSchema = mongoose.Schema({
    model: String,
    releaseDate: Date,
    priceInDolors: Number,
    displaySizeInInches: Number
});

// * Instance methods don't work with arrow function 
laptopSchema.methods.getDatailedDescription = function() {
    const productDescription =
        `Product desctiption:
        Model: ${this.model}
        Release date: ${this.releaseDate}
        Price: ${this.priceInDolors}
        Display size: ${this.displaySizeInInches}"`;

    return productDescription;
}

const modelName = 'Laptop2';
const Laptop2 = mongoose.model(modelName, laptopSchema);

const lenovo = new Laptop2({
    model: 'Lenogo G580',
    releaseDate: new Date(2014, 10, 2),
    priceInDolors: 999,
    displaySizeInInches: 15
});

lenovo.save((err, entry) => {
    console.log(entry.getDatailedDescription());
});