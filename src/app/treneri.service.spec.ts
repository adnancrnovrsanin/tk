import { TestBed } from '@angular/core/testing';

import { TreneriService } from './treneri.service';

describe('TreneriService', () => {
  let service: TreneriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreneriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
