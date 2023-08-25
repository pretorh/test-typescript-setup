# test-typescript-setup

Basic npm module setup with typescript and eslint

## setup

### typescript

- `npm install --save-dev typescript`
- create `tsconfig.json`

### eslint

- `npm install --save-dev eslint eslint-config-airbnb-base eslint-config-airbnb-typescript`
- create `.eslintrc.js`

use `overrides` to setup linting using typescript parsing for `ts` files only (avoid issue of "ESLint was
configured to run ... TSConfig include this file") (from [this](https://stackoverflow.com/a/62953719/1016377))

### js "interop"

`tsconfig.json`:
- set `compilerOptions.allowJs`
- should probaby set `include` (in root) to only compile sources (and not test files)

### tests written in typescript

- `npm install --save-dev @types/node`
- include the tests directory in tsconfig (`tsconfig.tstests.json`)
- override eslint rules to use this tsconfig
- run tests from the output directory (`...dist/test/...`)
