module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': [0, ' error ', ' windows '],
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
