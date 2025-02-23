const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the event
eventEmitter.emit('greet', 'Praveen');