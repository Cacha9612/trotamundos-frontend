import { TestBed } from '@angular/core/testing';

import { ReporteventasvistaService } from './reporteventasvista.service';

describe('ReporteventasvistaService', () => {
  let service: ReporteventasvistaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporteventasvistaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
