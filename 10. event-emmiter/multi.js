const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('message', () => {
    console.log('Listener 1: Message received!');
});

eventEmitter.on('target', () => {
    console.log('Listener 2: Another message event!');
});

eventEmitter.emit('target');
