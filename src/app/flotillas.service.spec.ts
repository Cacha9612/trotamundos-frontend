import { TestBed } from '@angular/core/testing';

import { FlotillasService } from './flotillas.service';

describe('FlotillasService', () => {
  let service: FlotillasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlotillasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
