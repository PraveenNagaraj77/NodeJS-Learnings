const path = require('path')

console.log('Directory name :', path.dirname(__filename));

console.log('Filename :', path.basename(__filename));

console.log('file extension',path.extname(__filename));

// Combine paths

const joinPath = path.join('/user','documents','node','projects');
console.log("Joined Path",joinPath);

const resolvePath = path.resolve('user','documents','node','projects');

console.log("Resolved Path",resolvePath);


const normalizePath = path.normalize('/user/.documents/../node/projects')

console.log(normalizePath)