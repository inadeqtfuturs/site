module.exports = {
  'extends': [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'jest': true,
    'node': true
  },
  'rules': {
    'jsx-a11y/href-no-hash': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: [
          '.storybook/**',
          'stories/**' 
        ]
      }
    ],
    'max-len': [
      'warn',
      {
        'code': 80,
        'tabWidth': 2,
        'comments': 80,
        'ignoreComments': false,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true
      }
    ]
  }
}
