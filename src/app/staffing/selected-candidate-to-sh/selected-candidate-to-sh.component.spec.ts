import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCandidateToSHComponent } from './selected-candidate-to-sh.component';

describe('SelectedCandidateToSHComponent', () => {
  let component: SelectedCandidateToSHComponent;
  let fixture: ComponentFixture<SelectedCandidateToSHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCandidateToSHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCandidateToSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
