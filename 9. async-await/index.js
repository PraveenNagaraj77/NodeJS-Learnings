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