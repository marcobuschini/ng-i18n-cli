[![Build Status](https://travis-ci.org/marcobuschini/ng-i18n-cli.svg?branch=master)](https://travis-ci.org/marcobuschini/ng-i18n-cli)
[![Coverage Status](https://coveralls.io/repos/github/marcobuschini/ng-i18n-cli/badge.svg)](https://coveralls.io/github/marcobuschini/ng-i18n-cli)
[![Maintainability](https://api.codeclimate.com/v1/badges/1e7182fa9dbebe0eec71/maintainability)](https://codeclimate.com/github/marcobuschini/ng-i18n-cli/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1e7182fa9dbebe0eec71/test_coverage)](https://codeclimate.com/github/marcobuschini/ng-i18n-cli/test_coverage)
[![Documentation](https://img.shields.io/badge/docs-read-brightgreen)](https://marcobuschini.github.io/ng-i18n-cli/index.html)
[![Commitizen Friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen)](http://commitizen.github.io/cz-cli/)

# Angular Translation Library (CLI)

## Specificaions

This is a first try to implement a replacement tool for the [NGX Translate](http://www.ngx-translate.com)
library that is now split into to many components, and has now enough shortcomings.

## Packages

This is a list of packages to evaluate for usage in this product:

1.  Read HTML: https://www.npmjs.com/package/node-html-parser
2.  Read TypeScript: https://www.npmjs.com/package/typescript-parser

They should fail I can use the regular expressions in this list:

1.  Read HTML: /'([A-Z0-9_]+)'\s*\|\s*(translate\s*(.*)|translate)/g
2.  Read TypeScript: /translate\(\s*'([A-Z0-9_]*)'\s*,(\s*\{._\})\s _\)|translate\(\s*'([A-Z0-9_]*)'\s\*\)/g
