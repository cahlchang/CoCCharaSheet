module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always'}],
  }
}
