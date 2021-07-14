import createDeferred from '../lib/esm/index.mjs';

(async function () {
  const { promise, resolve } = createDeferred();

  setImmediate(() => resolve(123));

  process.send(await promise);
})();
