module.exports = {
  env: {
    commonjs: true,
    es2021  : true,
    node    : true,
  },
  extends      : ['xo'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['align-assignments', 'sort-keys-fix'],
  rules  : {
    'align-assignments/align-assignments': [
      2,
      {
        requiresOnly: false,
      },
    ],
    'array-bracket-newline': [
      2,
      {
        minItems : 3,
        multiline: true,
      },
    ],
    'array-element-newline': [
      2,
      {
        minItems : 3,
        multiline: true,
      },
    ],
    'comma-dangle' : [2, 'always-multiline'],
    'comma-spacing': 2,
    indent         : [2, 2],
    'key-spacing'  : [
      2,
      {
        align: 'colon',
      },
    ],
    'new-cap'              : 0,
    'newline-before-return': 2,
    'no-multi-spaces'      : 0,
    'no-undef'             : 0,
    'no-unused-vars'       : [
      0,
      {
        args             : 'none',
        argsIgnorePattern: '^_',
      },
    ],
    'object-curly-newline': [
      2,
      {
        ExportDeclaration: {
          minProperties: 3,
          multiline    : true,
        },
        ImportDeclaration: 'never',
        ObjectExpression : 'always',
        ObjectPattern    : {
          multiline: true,
        },
      },
    ],
    'object-curly-spacing'   : [2, 'always'],
    'object-property-newline': [
      2,
      {
        allowAllPropertiesOnSameLine: false,
      },
    ],
    'object-shorthand'        : 2,
    'prefer-template'         : 2,
    'react/react-in-jsx-scope': 0,
    'sort-keys'               : [
      2,
      'asc',
      {
        caseSensitive: true,
        minKeys      : 2,
        natural      : false,
      },
    ],
    'sort-keys-fix/sort-keys-fix': 1,
  },
};
