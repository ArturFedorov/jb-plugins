module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: [
    'react-app',
    'airbnb-base',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'none' }],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-inferrable-types': 'error',
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^state'] }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx', '**/setupTests.ts'] }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
};
