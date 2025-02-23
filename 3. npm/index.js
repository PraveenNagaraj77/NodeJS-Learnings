const lodash = require('lodash');


const names = ["praveen","nagaraj","devi","dhanush"];

const capitalize = lodash.map(names,lodash.capitalize);

console.log(capitalize)