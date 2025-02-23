# **Callbacks in JavaScript**

## **Introduction**
In JavaScript, a **callback** is a function that is passed as an argument to another function and is executed later, often after an asynchronous operation completes. Callbacks are crucial for handling asynchronous tasks like file reading, API calls, or event handling.

---

## **Understanding Callbacks**

### **Example: Synchronous Callback**
```javascript
function person(name, callbackFn) {
    console.log(`Hello ${name}`);
    callbackFn();  // Invoking the callback function
}

function address() {
    console.log("India");
}

// Passing address function as a callback to person function
person('Praveen', address);
