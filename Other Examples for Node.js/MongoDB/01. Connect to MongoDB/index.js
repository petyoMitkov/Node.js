const settings = require('./config/settings');

let connectMongoDB = require('./db/01. Connect to MongoDB');

// 01 Connect to MongoDB
connectMongoDB(settings.url);
