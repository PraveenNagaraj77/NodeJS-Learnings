const fs = require('fs');




function person(name,callbackFn){
    console.log(`Hello ${name}`);
    callbackFn()
}

function address(){
    console.log("India")
}

person('praveen',address)


fs.readFile('index.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error Reading File",err);
        return;
    }
    console.log(data)
})