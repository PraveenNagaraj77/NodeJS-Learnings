// module.exports
// require

const firstModule = require('./firstModule')



console.log(firstModule.add(2,3));

console.log(firstModule.sub(9,4));

console.log(firstModule.mutliply(2,2));


try {
   console.log("Trying to divide by zero") 
   let result = firstModule.divide(8,0);
   console.log(result)
} catch (error) {
    console.log("Caught an error " +  error.message)
}


// Module Wrapper



// (
//     function(exports,require,module,__filename,__dirname){
//         // 
//     }
// )



