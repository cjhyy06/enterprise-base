module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  extends: 'semistandard',
  rules: {
    indent: [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    quotes: [
      1,
      'single'
    ],
    semi: [
      1,
      'never'
    ],
    'no-console': 1,
  },
  parserOptions: {
    sourceType: 'module'
  },
}
