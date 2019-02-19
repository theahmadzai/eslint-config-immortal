module.exports = {
  rules: {
    /*
    * Strict Mode
    */
    //strict
    /*
    * Possible Errors
    */
    // for-direction
    // getter-return
    // no-async-promise-executor
    // no-await-in-loop
    // no-compare-neg-zero
    // no-cond-assign
    'no-console': 'off',
    // no-constant-condition
    // no-control-regex
    // no-debugger
    // no-dupe-args
    // no-dupe-keys
    // no-duplicate-case
    'no-empty': [ 'error', { allowEmptyCatch: true }],
    // no-empty-character-class
    // no-ex-assign
    // no-extra-boolean-cast
    // no-extra-parens
    // no-extra-semi
    // no-func-assign
    // no-inner-declarations
    // no-invalid-regexp
    // no-irregular-whitespace
    // no-misleading-character-class
    // no-obj-calls
    // no-prototype-builtins
    // no-regex-spaces
    // no-sparse-arrays
    // no-template-curly-in-string
    // no-unexpected-multiline
    // no-unreachable
    // no-unsafe-finally
    // no-unsafe-negation
    // require-atomic-updates
    // use-isnan
    // valid-jsdoc
    // valid-typeof
    /*
    * Best Practices
    */
    // accessor-pairs
    // array-callback-return
    // block-scoped-var
    // class-methods-use-this
    // complexity
    // consistent-return
    // curly
    // default-case
    // dot-location
    // dot-notation
    // eqeqeq
    // guard-for-in
    // max-classes-per-file
    // no-alert
    // no-caller
    // no-case-declarations
    // no-div-regex
    'no-else-return': [ 'error' ],
    // no-empty-function
    // no-empty-pattern
    // no-eq-null
    // no-eval
    // no-extend-native
    // no-extra-bind
    // no-extra-label
    'no-fallthrough': 'off',
    // no-floating-decimal
    // no-global-assign
    // no-implicit-coercion
    // no-implicit-globals
    // no-implied-eval
    // no-invalid-this
    // no-iterator
    // no-labels
    // no-lone-blocks
    // no-loop-func
    // no-magic-numbers
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: true
      }
    ],
    // no-multi-str
    // no-new
    // no-new-func
    // no-new-wrappers
    // no-octal
    // no-octal-escape
    // no-param-reassign
    // no-proto
    // no-redeclare
    // no-restricted-properties
    // no-return-assign
    // no-return-await
    // no-script-url
    // no-self-assign
    // no-self-compare
    // no-sequences
    // no-throw-literal
    // no-unmodified-loop-condition
    // no-unused-expressions
    // no-unused-labels
    // no-useless-call
    // no-useless-concat
    // no-useless-escape
    // no-useless-return
    // no-void
    // no-warning-comments
    // no-with
    // prefer-promise-reject-errors
    // radix
    // require-await
    // require-unicode-regexp
    // vars-on-top
    // wrap-iife
    // yoda
    /*
    * Variables
    */
    // init-declarations
    // no-delete-var
    // no-label-var
    // no-restricted-globals
    // no-shadow
    // no-shadow-restricted-names
    'no-undef': 'off',
    // no-undef-init
    // no-undefined
    'no-unused-vars': 'off',
    // no-use-before-define
    /*
    * Node.js and CommonJS
    */
    // callback-return
    // global-require
    // handle-callback-err
    // no-buffer-constructor
    // no-mixed-requires
    // no-new-require
    // no-path-concat
    // no-process-env
    // no-process-exit
    // no-restricted-modules
    // no-sync
    /*
    * Stylistic Issues
    */
    // array-bracket-newline
    'array-bracket-spacing': [
      'error',
      'always',
      {
        objectsInArrays: false,
        arraysInArrays: false
      }
    ],
    // array-element-newline
    // block-spacing
    // brace-style
    // camelcase
    // capitalized-comments
    // comma-dangle
    'comma-spacing': [ 'error', { before: false, after: true }],
    // comma-style
    // computed-property-spacing
    // consistent-this
    // eol-last
    // func-call-spacing
    // func-name-matching
    // func-names
    // func-style
    // function-paren-newline
    // id-blacklist
    // id-length
    // id-match
    // implicit-arrow-linebreak
    'indent': [ 'error', 2 ],
    // jsx-quotes
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 'error',
    // line-comment-position
    'linebreak-style': [ 'error', 'unix' ],
    // lines-around-comment
    // lines-between-class-members
    // max-depth
    // max-len
    // max-lines
    // max-lines-per-function
    // max-nested-callbacks
    // max-params
    // max-statements
    // max-statements-per-line
    // multiline-comment-style
    // multiline-ternary
    // new-cap
    // new-parens
    // newline-per-chained-call
    // no-array-constructor
    // no-bitwise
    // no-continue
    // no-inline-comments
    // no-lonely-if
    // no-mixed-operators
    // no-mixed-spaces-and-tabs
    // no-multi-assign
    // no-multiple-empty-lines
    // no-negated-condition
    // no-nested-ternary
    // no-new-object
    // no-plusplus
    // no-restricted-syntax
    // no-tabs
    // no-ternary
    // no-trailing-spaces
    // no-underscore-dangle
    // no-unneeded-ternary
    // no-whitespace-before-property
    // nonblock-statement-body-position
    // object-curly-newline
    'object-curly-spacing': [
      'error',
      'always',
      {
        arraysInObjects: false,
        objectsInObjects: false
      }
    ],
    // object-property-newline
    // one-var
    // one-var-declaration-per-line
    // operator-assignment
    // operator-linebreak
    // padded-blocks
    // padding-line-between-statements
    // prefer-object-spread
    // quote-props
    'quotes': [
      'error',
      'single',
      {

        allowTemplateLiterals: true
      }
    ],
    // require-jsdoc
    'semi': [ 'error', 'always' ],
    'semi-spacing': [ 'error', { before: false, after: true }],
    // semi-style
    // sort-keys
    // sort-vars
    'space-before-blocks': [ 'error', 'always' ],
    // space-before-function-paren
    'space-in-parens': [ 'error', 'never' ],
    // space-infix-ops
    // space-unary-ops
    // spaced-comment
    // switch-colon-spacing
    // template-tag-spacing
    // unicode-bom
    // wrap-regex
    /*
    * ECMAScript 6
    */
    // arrow-body-style
    // arrow-parens
    'arrow-spacing': [ 'error', {
      'after': true,
      'before': true
    }],
    // constructor-super
    // generator-star-spacing
    // no-class-assign
    // no-confusing-arrow
    // no-const-assign
    // no-dupe-class-members
    'no-duplicate-imports': 'error',
    // no-new-symbol
    // no-restricted-imports
    // no-this-before-super
    // no-useless-computed-key
    // no-useless-constructor
    // no-useless-rename
    'no-var': [ 'error' ],
    'object-shorthand': [ 'error', 'always', {
      'avoidQuotes': true,
      'ignoreConstructors': false
    }],
    'prefer-arrow-callback': [ 'error', {
      'allowNamedFunctions': false,
      'allowUnboundThis': true
    }],
    // prefer-const
    // prefer-destructuring
    // prefer-numeric-literals
    'prefer-rest-params': [ 'error' ],
    // prefer-spread
    // prefer-template
    // require-yield
    // rest-spread-spacing
    // sort-imports
    // symbol-description
    'template-curly-spacing': [ 'error', 'always' ]
    // yield-star-spacing
  }
};
