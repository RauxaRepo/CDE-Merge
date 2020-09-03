module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'arrow-parens': 'off',
    'object-shorthand': 'off',
    'space-before-function-paren': 'off',
    'vue/require-prop-types': 'off',
    'vue/html-self-closing': 'off',
    'no-debugger': 'off',
    'vue/v-on-style': 'off',
    'vue/no-v-html': 'off',
    'comma-dangle': 'off',
    'no-template-curly-in-string': 'off',
    'vue/html-closing-bracket-newline': 'off',
    indent: 'off'
  }
}
