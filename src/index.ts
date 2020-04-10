#!/usr/bin/env node

import { Command } from 'commander'
import { Export } from './export'
import { Import } from './import'

const program = new Command()

const options = program
  .version('0.0.1')
  .description(
    'A tool to import/export translation strings from Angular projects translated with ng-i18n'
  )
  .option(
    '-e, --export <path>',
    'scans <path> to parse TS, and HTML sources to extract strings to be translated'
  )
  .option(
    '-i, --import <file>',
    'generates JS translation files to use in packages from a translated file'
  )
  .option(
    '-o, --output <file>',
    'output file where to write the parsed strings (.json) or the generated translations (.js)'
  )
  .option(
    '-l, --locale <iso_code>',
    'the ISO locale code in <language>_<culture> format. For example en_US for English (United States)'
  )
  .parse(process.argv)
  .opts()

if (!options.locale && options.import) {
  console.error(
    'You must specify a locale code. For example use en_US for English (United States)'
  )
  process.exit()
}

if (!options.import && !options.export) {
  console.error(
    'You must specify if you want to import or export translations strings.'
  )
  process.exit()
}

if (!options.output) {
  console.error('You must specify the output file.')
  process.exit()
}

if (options.import && options.export) {
  console.error(
    'You can only import source files, or export output files, but not both at the same time.'
  )
  process.exit()
}

if (options.export) {
  const generator = new Export()
  generator.export(options.export, options.output)
}

if (options.import) {
  const parser = new Import()
  parser.import(options.import, options.output, options.locale)
}
