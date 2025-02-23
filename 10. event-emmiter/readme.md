# **EventEmitter in Node.js**

## **Introduction**
In Node.js, the **EventEmitter** module is used to handle and emit events. It allows objects to communicate asynchronously without direct function calls.

- The `events` module provides the `EventEmitter` class.
- You can **create**, **emit**, and **listen** to custom events.

---

## **1. Basic Example: Creating and Emitting an Event**
This example creates a custom event named `"greet"`.

```javascript
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the event
eventEmitter.emit('greet', 'Praveen');
