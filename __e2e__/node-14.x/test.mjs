import { writeFile } from 'fs/promises';
import createDeferred from 'p-defer-es5';

const { promise, resolve } = createDeferred();

setTimeout(() => resolve('Hello, World!'), 0);

promise.then(result => writeFile('actual.txt', Buffer.from(result + '')));
