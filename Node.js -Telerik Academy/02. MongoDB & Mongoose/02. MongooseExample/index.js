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
/*
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
*/

//=============================================
//      Working with Virtual properties
//=============================================
/*
const hamsterSchema = mongoose.Schema({
    name: String,
    kolibka: { type: Number, min: 10, max: 60 }
});

// virtual property have geter and seter
hamsterSchema.virtual('CurrentDate').get(function() {
    return Date.now();
});

const Hamster = mongoose.model('Hamster', hamsterSchema);
const newHamster = new Hamster({
    name: 'Pesho',
    kolibka: 50
});

newHamster.save((err, sevedObj) => {
    console.log(sevedObj.CurrentDate);
});
*/

//================================================
//  Built-in Property Validators
//================================================

const productNumberMatch = /[a-zA-Z1-9]/;
const displaySizesEnumArr = ['13', '15.6', '17.3', '18', '21'];

var complexLaptopSchema = mongoose.Schema({
    model: String,
    productNumber: {
        type: String,
        require: true,
        match: productNumberMatch //Match validator
    },
    displaySize: {
        type: String,
        require: true,
        enum: displaySizesEnumArr //Enum validator
    },
    priceInDolors: Number,
    discountPercentage: {
        type: Number,
        require: false,
        min: 5, //Number validator
        max: 25 //Number validator
    },
    releaseDate: {
        type: Date,
        default: Date.now // !!! not Date.now() !!!
    }
});