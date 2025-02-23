# **Async/Await in JavaScript**

## **Introduction**
`async/await` is a modern way to handle asynchronous operations in JavaScript, making code **more readable and structured** compared to Promises and Callbacks.  
- The `async` keyword makes a function return a **Promise**.
- The `await` keyword pauses execution **until the Promise resolves**.

---

## **Example 1: Simulating an API Call using `async/await`**
This example simulates fetching user data from an API.

```javascript
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Praveen", role: "Developer" });
        }, 2000);
    });
}

// Using async/await
async function getUser() {
    console.log("Fetching user data...");
    const user = await fetchUserData();
    console.log("User Data:", user);
}

getUser();
