# 📘 Node.js File System (fs) Module – Learnings  

## 📌 Overview  
In this practice, I explored **Node.js File System (fs) Module** to perform **synchronous and asynchronous** file operations, including folder creation, file writing, reading, and appending content.  

## 🛠 What I Have Learned  

### ✅ 1. Working with the `fs` and `path` Modules  
- Imported the `fs` (File System) module to interact with files and directories.  
- Used the `path` module to construct platform-independent file paths.  

### ✅ 2. Creating Directories (`mkdirSync`)  
- Checked if a directory (`data` or `data2`) exists using `fs.existsSync()`.  
- If not present, created it using `fs.mkdirSync()`.  
- Logged confirmation messages upon successful creation.  

### ✅ 3. **Synchronous File Operations**  
- **Creating & Writing a File (`writeFileSync`)**  
  - Used `fs.writeFileSync()` to create `Example.txt` with initial content (`"Hello from Nodejs"`).  
  - **Overwrites** any existing content in the file.  

- **Reading a File (`readFileSync`)**  
  - Used `fs.readFileSync()` to read the file content with UTF-8 encoding.  

- **Appending to a File (`appendFileSync`)**  
  - Used `fs.appendFileSync()` to add a new line to the existing file without overwriting.  

### ✅ 4. **Asynchronous File Operations**  
- **Creating & Writing a File (`writeFile`)**  
  - Used `fs.writeFile()` to create an asynchronous file (`async-example.txt`).  
  - Logged success message upon successful file creation.  

- **Reading a File (`readFile`)**  
  - Used `fs.readFile()` to read file content asynchronously.  
  - Implemented error handling (`if (err) throw err`).  

- **Appending Content to a File (`appendFile`)**  
  - Used `fs.appendFile()` to add new content asynchronously.  
  - Nested callbacks to ensure reading the file after updating.  

- **Handling Nested Callbacks ("Callback Hell")**  
  - Implemented a sequence:  
    1. Read original file content.  
    2. Append a new line.  
    3. Read and log the updated content.  
  - Noted the **callback nesting issue** and how it can be avoided using Promises or Async/Await.  

## 🔥 Key Takeaways  
✅ Difference between **synchronous (`writeFileSync`)** and **asynchronous (`writeFile`)** file operations.  
✅ Asynchronous methods improve performance but require **callbacks** or **Promises** for better handling.  
✅ Learned how to create, read, and modify files dynamically in Node.js.  
✅ Explored potential issues like **callback hell** and will later explore solutions like **Promises** and **Async/Await**.  

---

📌 **Next Steps:**  
- Refactor asynchronous code using **Promises** and **Async/Await**.  
- Explore **fs.promises API** for cleaner, more readable async file handling. 🚀  
