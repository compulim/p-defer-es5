// When bundling with esbuild:
// - If we "import", it load ESM from "p-defer-es5/module". The default imported object is () => any.
// - If we "require", it load CJS from "p-defer-es5/main". The default imported object is () => any.

// When bundling with Webpack:
// - Nomatter we "import" or "require", it always load ESM from "p-defer-es5/module", based on the "webpack.config.json/mainFields".
// - If we "import", the default imported object is () => any.
// - If we "require", the default imported object is { default: () => any }.
// - If we "require" and "mainFields" is "main", the default imported object is () => any.

const createDeferred = require('p-defer-es5');

const { promise, resolve } = createDeferred();

setTimeout(() => resolve('Hello, World!'), 0);

promise.then(result => console.log(result));
