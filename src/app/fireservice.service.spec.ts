import { TestBed } from '@angular/core/testing';

import { FireserviceService } from './fireservice.service';

describe('FileserviceService', () => {
  let service: FireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
