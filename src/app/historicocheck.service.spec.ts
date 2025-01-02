import { TestBed } from '@angular/core/testing';

import { HistoricocheckService } from './historicocheck.service';

describe('HistoricocheckService', () => {
  let service: HistoricocheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricocheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
