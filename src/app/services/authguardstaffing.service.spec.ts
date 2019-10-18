import { TestBed } from '@angular/core/testing';

import { AuthguardstaffingService } from './authguardstaffing.service';

describe('AuthguardstaffingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthguardstaffingService = TestBed.get(AuthguardstaffingService);
    expect(service).toBeTruthy();
  });
});
