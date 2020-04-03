import { Observable, of } from 'rxjs'

export class TranslationServiceMock {
  public service: TranslateService

  public constructor() {
    this.service = new TranslateService()
  }
  public toString(): Observable<string> {
    this.service.translate('TEST_TRANSLATION')
    const paramMap = new Map<string, string>()
    paramMap.set('KEY_1', 'First Parameter')
    paramMap.set('KEY_2', 'Second Parameter')
    return this.service.translate('TEST_TRANSLATION_PARAMS', of(paramMap))
  }
}

class TranslateService {
  public translate(
    key: string,
    parameters?: Observable<Map<string, string>>
  ): Observable<string> {
    return of(key)
  }
}
