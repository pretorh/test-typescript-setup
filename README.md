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

### tests written in typescript (separate configs)

- `npm install --save-dev @types/node`
- create a separate tsconfig for tests (`tsconfig.tstests.json`) with `outDir: ./jstests`, including only the tests
- override eslint rules to use this tsconfig for `test/*.ts` files
- run tests from the output directory (`jstest/...`)

### tests written in typescript (single config)

Change `tsconfig.json` to exclude any js test files. Change the output directory to something other than dist
(it will contain the compiled tests as well)
