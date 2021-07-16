const { fork } = require('child_process');
const { join } = require('path');

test.each([
  ['esbuild to bundle CommonJS', '../dist/main.esbuild-cjs.js'],
  ['esbuild to bundle ES Module', '../dist/main.esbuild-esm.js'],
  ['Node.js to run CommonJS', '../node.js'],
  ['Node.js to run ES Module', '../node.mjs'],
  ['Webpack to bundle CommonJS', '../dist/main.webpack-cjs.js'],
  ['Webpack to bundle ES Module', '../dist/main.webpack-esm.js']
])('Code using %s should work', async (_, filename) => {
  const childProcess = fork(join(__dirname, filename));
  const messageFn = jest.fn();

  const promise = new Promise((resolve, reject) => {
    childProcess.on('message', arg0 => messageFn(arg0));
    childProcess.once('exit', resolve);
    childProcess.once('error', reject);
  });

  await expect(promise).resolves.toBe(0);

  expect(messageFn).toHaveBeenCalledTimes(1);
  expect(messageFn).toHaveBeenCalledWith(123);
});
