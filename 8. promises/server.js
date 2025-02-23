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