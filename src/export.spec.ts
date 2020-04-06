import { Export } from './export'

describe('Exporter Tests', () => {
  it('should create Export instance and print a log message', async () => {
    const e = new Export()
    expect(e).toBeTruthy()
    await e.export(
      'src/test/assets/export',
      'src/test/assets/export/en_US.json'
    )
  })

  it('should fail when input path does not exist', async () => {
    const e = new Export()
    expect(e).toBeTruthy()
    await e.export(
      'src/test/assets/export/doesNotExist',
      'src/test/assets/export/doesNotExist.json'
    )
  })
})
