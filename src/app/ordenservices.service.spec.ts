import { TestBed } from '@angular/core/testing';

import { OrdenservicesService } from './ordenservices.service';

describe('OrdenservicesService', () => {
  let service: OrdenservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
