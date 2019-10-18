import { TestBed, async, inject } from '@angular/core/testing';

import { StaffingGuard } from './staffing.guard';

describe('StaffingGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffingGuard]
    });
  });

  it('should ...', inject([StaffingGuard], (guard: StaffingGuard) => {
    expect(guard).toBeTruthy();
  }));
});
