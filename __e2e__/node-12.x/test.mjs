import { promises } from 'fs';
import createDeferred from 'p-defer-es5';

const { writeFile } = promises;
const { promise, resolve } = createDeferred();

setTimeout(() => resolve('Hello, World!'), 0);

promise.then(result => writeFile('actual.txt', Buffer.from(result + '')));
