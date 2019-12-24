import createDeferred from '../lib/index';

test('createDeferred should be a function', () => {
  expect(typeof createDeferred).toBe('function');
});

test('createDeferred should work in simple case', async () => {
  const { promise, resolve } = createDeferred();

  setImmediate(() => resolve(123));

  await expect(promise).resolves.toBe(123);
});
