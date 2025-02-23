const fs = require('fs');

fs.readFile('index.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error Reading File",err);
        return;
    }

    const modifyFileData = data.toUpperCase();

    fs.writeFile('output.txt',modifyFileData,(err)=>{
        if(err){
            console.log("Error Writing File",err);
            return;
        }

        console.log('Data written to the file')

        fs.readFile('output.txt','utf8',(err,data)=>{
            if(err){
                console.log("Error Reading  File",err);
                return;
            }

            console.log(data)
        })

    })

})