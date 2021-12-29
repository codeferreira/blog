module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:import/recommended',
      'airbnb',
      'prettier',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks', 'import'],
    rules: {
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'no-var': 'error',
      'react/react-in-jsx-scope': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      camelcase: 'off',
      indent: 'off',
      'react/require-default-props': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-expressions': [1],
      'no-use-before-define': 'off',
      'prefer-template': 'error',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {
          allowSingleExtends: true,
        },
      ],
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],
      'react/no-array-index-key': ['error'],
      'react/jsx-one-expression-per-line': [1],
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-unresolved': [2, { commonjs: true, amd: true }],
      'import/named': 2,
      'import/namespace': 2,
      'import/default': 2,
      'import/export': 2,
      'import/order': [
        'error',
        {
          groups: ['builtin', ['sibling', 'parent'], 'index', 'object'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/function-component-definition': 'off',
    },
    settings: {
      'import/resolver': {
        typescript: {},
      },
    },
  };
  