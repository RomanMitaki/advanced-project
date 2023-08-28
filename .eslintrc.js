module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',

  overrides: [
    {
      env: {
        node: true
      },
      files: ['./**/*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
        sourceType: 'module'
      },
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-floating-promises': ['warn'],
    'i18next/no-literal-string': ['warn', { markupOnly: true }],
    '@typescript-eslint/ban-types': 'off'
  }
}
