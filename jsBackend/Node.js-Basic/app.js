// const cpuInformation = process.memoryUsage();
// //taking argument in command
// const firstName = process.argv[2];
// const lastName = process.argv[3];

// console.log(`Hello ${firstName} ${lastName}`);

// console.log(cpuInformation);

// console.log(process.argv)

// /* output
// Hello firstname lastname
// {
//     rss: 14569472,
//     heapTotal: 2654208,
//     heapUsed: 1788896,
//     external: 855681,
//     arrayBuffers: 9898
// }
// */

const coffee = require('./coffee')

console.log(coffee)

const { firstName, lastName } = require('./user');


console.log(firstName);
console.log(lastName);