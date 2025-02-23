# **JavaScript Promises - Different Examples**

## **Introduction**
A **Promise** in JavaScript is used to handle asynchronous operations, avoiding callback hell and making code more readable. Promises can be **resolved** (success) or **rejected** (failure), and they allow chaining with `.then()` and error handling with `.catch()`.

---

## **Example 1: Simulating an API Call (Fake Fetch Request)**

This example simulates fetching data from an API using a Promise:

```javascript
function fetchData() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            const success = true; // Change to false to test rejection

            if (success) {
                resolve({ id: 1, name: "Praveen", role: "Developer" });
            } else {
                reject("Error: Failed to fetch data");
            }
        }, 2000);
    });
}

// Using the Promise
fetchData()
    .then(data => console.log("Data received:", data))
    .catch(error => console.log(error));
