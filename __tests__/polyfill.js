/**
 * @jest-environment jsdom
 */

test('Using bundle', async () => {
  require('../dist/p-defer-es5.production.min');

  const { promise, resolve } = createDeferred();

  setTimeout(() => resolve(123), 0);

  await expect(promise).resolves.toBe(123);
});

test('Using package', async () => {
  require('..');

  const { promise, resolve } = createDeferred();

  setTimeout(() => resolve(123), 0);

  await expect(promise).resolves.toBe(123);
});
