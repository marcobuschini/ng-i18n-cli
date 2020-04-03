import { Import } from './import'

describe('Importer Tests', () => {
  it('should create Import instance and should print a log message', async () => {
    const i = new Import()
    expect(i).toBeTruthy()
    await i.import(
      'test/assets/import/messages.json',
      'test/assets/import/en_US.js',
      'en_US'
    )
  })
})
