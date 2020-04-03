import { Export } from './export'

describe('Exporter Tests', () => {
  it('should create Export instance and print a log message', async () => {
    const e = new Export()
    expect(e).toBeTruthy()
    await e.export(
      'test/assets/export/messages.json',
      'test/assets/export/en_US.js'
    )
  })
})
