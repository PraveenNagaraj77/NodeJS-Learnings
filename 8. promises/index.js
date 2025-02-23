

function delay(time){
    return new Promise((resolve)=> setTimeout(resolve,time) )
}

console.log('Promise starts')
delay(2000).then(()=>console.log('after 2s'));
console.log('end')

function divide(num1,num2){
    return new Promise((resolve,reject)=>{
        if(num2===0){
            reject('cant divide by zero')
        }else{
            resolve(num1/num2);
        }
    })
}


divide(10,5).then(result => console.log(result)).catch(error=>console.log(error));