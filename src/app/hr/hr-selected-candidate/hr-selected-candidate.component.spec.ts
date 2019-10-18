import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrSelectedCandidateComponent } from './hr-selected-candidate.component';

describe('HrSelectedCandidateComponent', () => {
  let component: HrSelectedCandidateComponent;
  let fixture: ComponentFixture<HrSelectedCandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrSelectedCandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrSelectedCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
