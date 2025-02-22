const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname,"data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created")
}




const filepath = path.join(dataFolder,"Example.txt");

// sync way

fs.writeFileSync(filepath,"Hello from Nodejs");
console.log("File Created Successfully");

// read content
const readContent = fs.readFileSync(filepath,'utf8');
console.log("File Content : ",readContent)


// Append or add a line
fs.appendFileSync(filepath,'\nThis is a New Line added to the file')
console.log("New File content addded")


// Async Way 

const dataFolder2 = path.join(__dirname,"data2");

if(!fs.existsSync(dataFolder2)){
    fs.mkdirSync(dataFolder2);
    console.log("Data Folder2 Created")
}


const asyncFilePath = path.join(dataFolder2,'async-example.txt');

fs.writeFile(asyncFilePath,'Hello Async',(err)=>{
    if(err) throw err;
    console.log("Aysnc File is Created Successfully")
})

// read file


fs.readFile(asyncFilePath,'utf8',(err,data)=>{
    if(err) throw err;
    console.log("Aysnc File content :",data);

    // 
    fs.appendFile(asyncFilePath,"\nThis is new Line",(err)=>{
        if(err) throw err;
        console.log("New Line Added")

        fs.readFile(asyncFilePath,'utf8',(err,updatedData)=>{
            if(err) throw err;
            console.log("Updated Data:",updatedData)
        })
    })
})


