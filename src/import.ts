import { execSync } from 'child_process'

export class Import {
  public import(file: string, output: string, culture: string): number {
    console.info(`Loading translated strings from ${file}`)

    try {
      const command = `npx messageformat ${file} -o ${output} -n ${culture}`
      const buffer = execSync(command)
      process.stdout.write(buffer)
      console.log(`Translation exported to ${output}`)
      return 0
    } catch (error) {
      console.error(error.message)
      return 1
    }
  }
}
