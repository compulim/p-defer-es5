import { fork } from 'child_process';

import createDeferred from '../lib/index';

test('createDeferred should be a function', () => {
  expect(typeof createDeferred).toBe('function');
});

test('createDeferred should work in simple case', async () => {
  const { promise, resolve } = createDeferred();

  setImmediate(() => resolve(123));

  await expect(promise).resolves.toBe(123);
});

test('createDeferred should work when imported from .mjs', async () => {
  // Until Jest support .mjs, we need to use fork().
  const process = fork('./__tests__/simple.mjs');
  const promise = new Promise((resolve, reject) => process.once('message', resolve).once('exit', reject));

  await expect(promise).resolves.toBe(123);
});
