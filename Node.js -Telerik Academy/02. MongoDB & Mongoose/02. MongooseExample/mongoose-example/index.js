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