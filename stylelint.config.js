module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'no-empty-source': null,
    'rule-empty-line-before': null,
    'selector-list-comma-newline-after': null,
    'no-descending-specificity': null,
    'declaration-block-trailing-semicolon': null,
    'declaration-empty-line-before': null,
    // 'at-rule-empty-line-before': 'never',
    'at-rule-empty-line-before': null,
  },
};
