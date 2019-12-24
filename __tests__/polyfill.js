test('Using bundle', async () => {
  require('../dist/p-defer-es5.production.min');

  const { promise, resolve } = createDeferred();

  setImmediate(() => resolve(123));

  await expect(promise).resolves.toBe(123);
});

test('Using package', async () => {
  require('..');

  const { promise, resolve } = createDeferred();

  setImmediate(() => resolve(123));

  await expect(promise).resolves.toBe(123);
});
