// "ms" is being aliased as "p-defer", thus, "p-defer-es5" is actually "ms".
const ms = require('p-defer-es5');

console.log(ms(1000));
