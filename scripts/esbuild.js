// The purpose of bundling using esbuild is to walk the entrypoint and make sure all related code in the original package are transpiled.
// We should not need to bundle transient dependencies, they should be ES5.
require('esbuild')
  .build({
    bundle: true,
    entryPoints: [process.argv[3]],
    external: Object.keys(require(`${process.argv[2]}/package.json`).dependencies),
    format: process.argv[4],
    outfile: process.argv[5]
  })
  .catch(() => process.exit(1));
