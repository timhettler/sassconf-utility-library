# Contributing to the SassConf Utility Library

After you fork this library, make a new branch, then follow these guidelines:

## 1. Create a new partial in the `sass` folder

1. The filename should match the main mixin or function.
2. Public variables should start with the prefix `scu-`.
3. Private variables, fuctions, and mixins should start with an underscore (i.e. `@function _this-is-a-private-function`).
4. Add your partial to `sass/_utilities.scss`.
5. Run `grunt sass` or `grunt watch` to test output. (See the `demo` folder.)

## 2. Create tests in the `test/lib` folder

1. The filename should be the same as your partial.
2. Add your test partial to `test/test.scss`.
3. Run `grunt test` to... run tests.

## 3. Create documentation

1. Add Sassdoc annotations to all variables, functions, and mixins. Make sure you add a [file-level annotation](http://sassdoc.com/file-level-annotations/) with your name as the author.
2. Run `grunt sassdoc` to generate documentation.

## 4. Create a Pull Request