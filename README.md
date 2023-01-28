# test-typescript-setup

Basic npm module setup with typescript and eslint

## setup

### typescript

- `npm install --save-dev typescript`
- create `tsconfig.json`

### eslint

- `npm install --save-dev eslint eslint-config-airbnb-base eslint-config-airbnb-typescript`
- create `.eslintrc.js`

use overrides to setup linting using typescript parsing for `ts` files only (avoid issue of "ESLint was
configured to run ... TSConfig include this file") (from [this](https://stackoverflow.com/a/62953719/1016377)
