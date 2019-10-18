import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffingprofileComponent } from './staffingprofile.component';

describe('StaffingprofileComponent', () => {
  let component: StaffingprofileComponent;
  let fixture: ComponentFixture<StaffingprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffingprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffingprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
