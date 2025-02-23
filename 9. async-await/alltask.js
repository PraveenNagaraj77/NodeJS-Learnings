function taskA() {
    return new Promise(resolve => setTimeout(() => resolve("Task A Done"), 2000));
}

function taskB() {
    return new Promise(resolve => setTimeout(() => resolve("Task B Done"), 1000));
}

async function runAllTasks() {
    console.log("Starting all tasks...");
    const results = await Promise.all([taskA(), taskB()]);
    console.log("Results:", results);
}

runAllTasks();
