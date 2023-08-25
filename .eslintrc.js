module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  ignorePatterns: [
    'dist/*',
    'jstests/*',
    'node_modules/*',
  ],
  overrides: [
    {
      files: '*.ts',
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: [
        '@typescript-eslint',
      ],
    },
    {
      files: 'test/*.ts',
      parserOptions: {
        project: './tsconfig.tstests.json',
      },
    },
    {
      files: 'test/*.js',
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
  rules: {
  },
};
