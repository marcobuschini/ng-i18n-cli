import { Export } from './export'

describe('Exporter Tests', () => {
  it('should create Export instance', () => {
    const e = new Export()
    expect(e).toBeTruthy()
  })

  it('should print a log message', () => {
    const logSpy = spyOn(console, 'log').and.callThrough()
    const e = new Export()
    e.export('missing.txt', 'output')
    expect(logSpy).toHaveBeenCalled()
  })
})
