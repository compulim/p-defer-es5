require('p-defer-es5/dist/p-defer-es5.production.min.js');

const { promise, resolve } = createDeferred();

setTimeout(() => resolve('Hello, World!'), 0);

promise.then(console.log.bind(console));
