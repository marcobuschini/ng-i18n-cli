import { exec } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export class Export {
  public async export(inputPath: string, outputFile: string) {
    console.log('Loading messages from source files in ' + inputPath)
    this.fromDirTS(inputPath)
    console.log('Loading messages from html files in ' + inputPath)
    this.fromDirHTML(inputPath)
  }

  private fromDirTS(inputPath: string, filter: string = '.ts') {
    if (!fs.existsSync(inputPath)) {
      console.log('no dir ', inputPath)
      return
    }

    const files = fs.readdirSync(inputPath)
    files.forEach((file: string) => {
      const filename = path.join(inputPath, file)
      const stat = fs.lstatSync(filename)
      if (stat.isDirectory()) {
        this.fromDirTS(filename, filter)
      } else if (filename.indexOf(filter) >= 0) {
        console.log('-- found: ', filename)
        this.parseTS(filename)
      }
    })
  }

  private fromDirHTML(inputPath: string, filter: string = '.html') {
    if (!fs.existsSync(inputPath)) {
      console.log('no dir ', inputPath)
      return
    }

    const files = fs.readdirSync(inputPath)
    files.forEach((file: string) => {
      const filename = path.join(inputPath, file)
      const stat = fs.lstatSync(filename)
      if (stat.isDirectory()) {
        this.fromDirHTML(filename, filter)
      } else if (filename.indexOf(filter) >= 0) {
        console.log('-- found: ', filename)
        this.parseHTML(filename)
      }
    })
  }

  private parseTS(filename: string): string[] {
    const ret = new Array<string>()

    return ret
  }

  private parseHTML(filename: string) {
    const ret = new Array<string>()
    const buffer = fs.readFileSync(filename, 'utf8')
    const regex = /'([A-Z0-9_]+)'\s*\|\s*(translate\s*(.*)|translate)/g
    let m = regex.exec(buffer)
    while (m !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++
      }

      // The result can be accessed through the `m`-variable.
      m.forEach((match, groupIndex) => {
        if (groupIndex === 1) {
          console.log(`Found match: ${match}`)
        }
      })
      m = regex.exec(buffer)
    }
  }
}
