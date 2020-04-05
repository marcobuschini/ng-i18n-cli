import { Import } from './import'

describe('Importer Tests', () => {
  it('should create Import instance and should print a log message', async () => {
    const i = new Import()
    expect(i).toBeTruthy()
    await i.import(
      'src/test/assets/import/messages.json',
      'src/test/assets/import/en_US.js',
      'en_US'
    )
  })

  it('should fail when input path does not exist', async () => {
    const e = new Import()
    expect(e).toBeTruthy()
    await e.import(
      'src/test/assets/export/doesNotExist',
      'src/test/assets/import/en_US.js',
      'en_US'
    )
  })
})
