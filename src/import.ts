import commander from 'commander'
import { exec } from 'child_process'

export class Import {
  public async import(file: string, output: string, culture: string) {
    await console.info('Loading translated strings from ' + file)
    const command =
      'npx messageformat ' + file + ' -o ' + output + ' -n ' + culture
    const child = await exec(command)

    child.stdout?.pipe(process.stdout)
    child.stderr?.pipe(process.stderr)

    child.on('close', async () => {
      await console.log(`Translation exported to ${output}`)
      process.exit()
    })

    child.on('error', async error => {
      await console.error(error)
      process.exit(1)
    })
  }
}
