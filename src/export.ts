import * as path from 'path'
import * as fs from 'fs'

export class Export {
  public async export(inputPath: string, outputFile: string) {
    console.log(`Loading messages from source files in ${inputPath}`)
    const ts = this.fromDirTS(inputPath)
    console.log(`Loading messages from html files in ${inputPath}`)
    const html = this.fromDirHTML(inputPath)

    const uniq = ts
      .concat(html)
      .sort()
      .filter((v, i, a) => a.indexOf(v) === i)
    let ret = ''
    uniq.forEach(e => (ret = ret.concat(`  "${e}": "${e}",\n`)))
    ret = `{\n${ret.substr(0, ret.length - 2)}\n}`
    fs.writeFileSync(outputFile, ret)
  }

  private fromDirTS(inputPath: string, filter: string = '.ts'): string[] {
    if (!fs.existsSync(inputPath)) {
      console.log(`Path not found ${inputPath}`)
      return []
    }

    let unsorted = new Array<string>()

    const files = fs.readdirSync(inputPath)
    files.forEach((file: string) => {
      const filename = path.join(inputPath, file)
      const stat = fs.lstatSync(filename)
      if (stat.isDirectory()) {
        unsorted = unsorted.concat(this.fromDirTS(filename, filter))
      } else if (filename.indexOf(filter) >= 0) {
        console.log(`-- found: ${filename}`)
        unsorted = unsorted.concat(this.parseTS(filename))
      }
    })
    return unsorted
  }

  private fromDirHTML(inputPath: string, filter: string = '.html'): string[] {
    if (!fs.existsSync(inputPath)) {
      console.log(`Path not found ${inputPath}`)
      return []
    }

    let unsorted = new Array<string>()

    const files = fs.readdirSync(inputPath)
    files.forEach((file: string) => {
      const filename = path.join(inputPath, file)
      const stat = fs.lstatSync(filename)
      if (stat.isDirectory()) {
        unsorted = unsorted.concat(this.fromDirHTML(filename, filter))
      } else if (filename.indexOf(filter) >= 0) {
        console.log(`-- found: ${filename}`)
        unsorted = unsorted.concat(this.parseHTML(filename))
      }
    })
    return unsorted
  }

  private parseTS(filename: string): string[] {
    const ret = new Array<string>()
    const buffer = fs.readFileSync(filename, 'utf8')
    const regex = /translate\s*\(\s*['"]([A-Z0-9_]*)['"]\s*(\s*.*)\)/g
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
          ret.push(match)
        }
      })
      m = regex.exec(buffer)
    }
    return ret
  }

  private parseHTML(filename: string): string[] {
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
          ret.push(match)
        }
      })
      m = regex.exec(buffer)
    }
    return ret
  }
}
