module.exports = {
  'vue/html-self-closing': [2, {
    html: {
      void: 'never',
      normal: 'never',
      component: 'always'
    },
  }],
  'vue/max-attributes-per-line': [2, {
    singleline: 5,
    multiline: {
      max: 1,
      allowFirstLine: false
    }
  }],
  'html-closing-bracket-newline': [2, {
    singleline: 'never',
    multiline: 'never'
  }],
  'html-closing-bracket-spacing': [2, {
    startTag: 'never',
    endTag: 'never',
    selfClosingTag: 'always'
  }]
};
