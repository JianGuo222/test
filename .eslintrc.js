const fs = require('fs');

const prettierOptions = JSON.parse(fs.readFileSync('./.prettierrc', 'utf8'));

module.exports = {
  parser: 'babel-eslint',
  extends: ['react-app', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    indent: ['error', 2, { SwitchCase: 1, ArrayExpression: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  env: {
    jest: true,
  },
};
