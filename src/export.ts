import { exec } from 'child_process'
import * as path from 'path'
import * as fs from 'fs'

export class Export {
  public async export(inputPath: string, outputFile: string) {
    console.log('Loading messages from source files in ' + inputPath)
    this.fromDir(inputPath, '.ts')
    console.log('Loading messages from html files in ' + inputPath)
    this.fromDir(inputPath, '.html')
  }

  private fromDir(inputPath: string, filter: string) {
    if (!fs.existsSync(inputPath)) {
      console.log('no dir ', inputPath)
      return
    }

    const files = fs.readdirSync(inputPath)
    files.forEach((file: string) => {
      const filename = path.join(inputPath, file)
      const stat = fs.lstatSync(filename)
      if (stat.isDirectory()) {
        this.fromDir(filename, filter)
      } else if (filename.indexOf(filter) >= 0) {
        console.log('-- found: ', filename)
      }
    })
  }
}
