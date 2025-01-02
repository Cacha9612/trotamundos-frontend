import { TestBed } from '@angular/core/testing';

import { ReporteventasService } from './reporteventas.service';

describe('ReporteventasService', () => {
  let service: ReporteventasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteventasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
