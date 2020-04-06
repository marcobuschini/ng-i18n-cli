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

## RegEx

These are the the regular expressions used to extract string keys for translation:

1.  From HTML: /'([A-Z0-9_]+)'\s*\|\s*(translate\s*(.*)|translate)/g
2.  From TypeScript: /translate\s*\(\s*['"]([A-Z0-9_]*)['"]\s*(\s*.\*)\)/g

## Releases

https://github.com/semantic-release/semantic-release
