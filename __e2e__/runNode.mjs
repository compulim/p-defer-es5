import createDeferred from 'p-defer-es5/lib/esm/index.mjs';

const { promise, resolve } = createDeferred();

setTimeout(() => resolve(123), 0);

promise.then(process.send.bind(process));
