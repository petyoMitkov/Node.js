let events = require('events');
let eventEmitter = new events.EventEmitter();

//Create an event handles:
let myEventHandles = function() {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandles);

// Fire the 'scream' event:
eventEmitter.emit('scream');