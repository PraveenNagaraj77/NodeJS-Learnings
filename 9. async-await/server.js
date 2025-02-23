function fetchData(success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve("Data received successfully");
            } else {
                reject("Error: Unable to fetch data");
            }
        }, 2000);
    });
}

async function fetchDataHandler() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(true); // Change to true for success
        console.log(data);
    } catch (error) {
        console.error("Caught Error:", error);
    }
}

fetchDataHandler();
