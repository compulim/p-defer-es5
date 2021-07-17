require('p-defer-es5/dist/p-defer-es5.production.min.js');

const { promise, resolve } = createDeferred();

setTimeout(() => resolve(123), 0);

promise.then(process.send.bind(process));
