# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added ES Module entrypoint, in PR [#19](https://github.com/compulim/p-defer-es5/pull/19)

### Changed

- Move to end-to-end tests from unit tests, in PR [#20](https://github.com/compulim/p-defer-es5/pull/20) and PR [#21](https://github.com/compulim/p-defer-es5/pull/21)
- Ponyfill `globalThis` and `Promise` via `core-js-pure` by usage, in PR [#20](https://github.com/compulim/p-defer-es5/pull/20)

### Fixed

- Fixed [#17](https://github.com/compulim/p-defer-es5/issues/17), moved to [`esbuild`](https://npmjs.com/package/esbuild) from Webpack, in PR [#19](https://github.com/compulim/p-defer-es5/pull/19)

## [1.2.2] - 2021-07-13

### Changed

- Bumped dependencies, in PR [#16](https://github.com/compulim/p-defer-es5/pull/16)
   - [`@babel/core@7.14.6`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.14.7`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.2.2`](https://npmjs.com/package/babel-loader)
   - [`jest@27.0.6`](https://npmjs.com/package/jest)
   - [`p-defer@4.0.0`](https://npmjs.com/package/p-defer)
   - [`webpack-cli@4.7.2`](https://npmjs.com/package/webpack-cli)
   - [`webpack@4.46.0`](https://npmjs.com/package/webpack)

## [1.2.1] - 2020-08-06

### Changed

- Revert `npx` because [`.npmrc` issues with `NpmAuthenticateV0`](https://github.com/microsoft/azure-pipelines-tasks/issues/13265)

## [1.2.0] - 2020-08-06

### Changed

- Bumped dependencies
   - [`@babel/core@7.11.1`](https://npmjs.com/package/@babel/core)
   - [`@babel/preset-env@7.11.0`](https://npmjs.com/package/@babel/preset-env)
   - [`babel-loader@8.1.0`](https://npmjs.com/package/babel-loader)
   - [`webpack@4.44.1`](https://npmjs.com/package/webpack)
   - [`webpack-cli@3.3.12`](https://npmjs.com/package/webpack-cli)

## [1.1.0] - 2020-05-25

### Changed

- CI/CD moved to GitHub Actions from Travis CI
- Use `npx` as much as possible to reduce footprint
- Lockdown versions of dependencies to reduce package maintenance
- Skip minification to speed up build

## [1.0.1] - 2019-12-24

- Accepts `abort-controller` package from parent `node_modules` folders

## [1.0.0] - 2019-12-24

### Added

- Initial commit
