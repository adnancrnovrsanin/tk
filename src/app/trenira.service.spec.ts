import { TestBed } from '@angular/core/testing';

import { TreniraService } from './trenira.service';

describe('TreniraService', () => {
  let service: TreniraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreniraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
