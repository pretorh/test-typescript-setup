#!/usr/bin/env bash
set -e

mkdir redo
cd redo
npm init --yes
npm install --save-dev typescript eslint eslint-config-airbnb-base eslint-config-airbnb-typescript
cp -vR ../tsconfig.json ../.eslintrc.js ../src ../test ./
npx tsc
npx eslint
node test/use-built-module.js

# tests written in typescript
npm install --save-dev @types/node
node ./out/test/simple-test-written-in-ts.js
