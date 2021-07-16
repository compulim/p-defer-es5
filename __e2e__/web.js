import createDeferred from 'p-defer-es5';

const { promise, resolve } = createDeferred();

setTimeout(() => resolve(123), 0);

promise.then(process.send.bind(process));
