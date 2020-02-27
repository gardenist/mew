const path = require('path');
const string = __filename;

console.log('path.basename():',path.basename(string));
console.log(path.parse(string));

