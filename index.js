module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react-native-a11y/all',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        'react/prop-types': 'off',
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        },
      },
    },
    {
      files: [
        '**/__tests__/**/*.[jt]s?(x)',
        '**/?(*.)+(spec|test).[jt]s?(x)',
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        // You can add or override Jest-specific rules here if needed
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: '2021',
    sourceType: 'module',
  },
  plugins: [
    'simple-import-sort',
    'unused-imports',
    'import',
    'jest',
    'react-hooks',
    '@typescript-eslint',
    'react',
    'lodash-specific-import',
    'prettier',
  ],
  rules: {
    'react-native-a11y/has-accessibility-hint': 'warn',
    'react-native-a11y/has-accessibility-props': 'warn',
    'react-native-a11y/has-valid-accessibility-role': 'warn',
    'react-native-a11y/has-valid-accessibility-descriptors': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': [
      'error',
      {
        extendDefaults: true,
        types: {
          object: false,
          '{}': false,
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    'array-bracket-newline': 'off',
    'class-methods-use-this': 'warn',
    'consistent-return': 'off',
    curly: ['warn', 'all'],
    'import/extensions': 'off',
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unsafe-optional-chaining': [
      'error',
      { disallowArithmeticOperators: true },
    ],
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    indent: 'off',
    'linebreak-style': 'off',
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: false,
        afterLineComment: false,
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        beforeBlockComment: false,
        beforeLineComment: false,
      },
    ],
    'multiline-ternary': ['off'],
    'no-console': 'off',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'warn',
    'no-nested-ternary': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-shadow': 'off',
    'no-tabs': ['warn', { allowIndentationTabs: true }],
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'warn',
    'no-use-before-define': 'warn',
    'global-require': 0,
    'object-curly-newline': [
      'off',
      {
        ExportDeclaration: {
          minProperties: 2,
          multiline: true,
        },
        ImportDeclaration: {
          minProperties: 2,
          multiline: true,
        },
        ObjectExpression: {
          minProperties: 2,
          multiline: true,
        },
        ObjectPattern: {
          minProperties: 2,
          multiline: true,
        },
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'prefer-promise-reject-errors': 'off',
    'prefer-template': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSameLine: true,
        bracketSpacing: false,
        endOfLine: 'auto',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'promise/always-return': 'off',
    'promise/prefer-await-to-then': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    radix: 'off',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useDebounceCallback|useNestedDebounceCallback',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-inline-styles': 'off',
    'react/display-name': 'off',
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/jsx-fragments': ['off'],
    'react/jsx-props-no-spreading': ['warn', { custom: 'ignore' }],
    'react/no-typos': 'error',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/prefer-es6-class': ['warn', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'warn',
    'react/require-default-props': 'off',
    'react/sort-comp': 'error',
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: false,
        requiredFirst: true,
        sortShapeProp: true,
      },
    ],
    camelcase: 'warn',
    'react/static-property-placement': [0],
    semi: ['warn', 'always'],
    'sort-imports': 'off',
    // Can uncomment this if we want to sort keys within objects too.
    // 'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-vars': 'warn',
    'tailwindcss/no-custom-classname': [
      'error',
      { classRegex: '^(class(Name)?|[a-zA-Z0-9]+ClassName)$' },
    ],
    'tailwindcss/enforces-negative-arbitrary-values': [
      'error',
      { classRegex: '^(class(Name)?|[a-zA-Z0-9]+ClassName)$' },
    ],
    'tailwindcss/enforces-shorthand': 'off', // This rule is set to 'off' because it can be too restrictive in some cases. There are also reports of it misbehaving: https://github.com/francoismassart/eslint-plugin-tailwindcss/issues/349
    'tailwindcss/no-unnecessary-arbitrary-value': [
      'error',
      { classRegex: '^(class(Name)?|[a-zA-Z0-9]+ClassName)$' },
    ],
    'tailwindcss/no-contradicting-classname': [
      'error',
      { classRegex: '^(class(Name)?|[a-zA-Z0-9]+ClassName)$' },
    ],
    'tailwindcss/no-arbitrary-value': [
      'warn',
      { classRegex: '^(class(Name)?|[a-zA-Z0-9]+ClassName)$' },
    ],
    'no-promise-executor-return': 'off',
    'lodash-specific-import/no-global': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
