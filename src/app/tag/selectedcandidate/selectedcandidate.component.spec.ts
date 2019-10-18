import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedcandidateComponent } from './selectedcandidate.component';

describe('SelectedcandidateComponent', () => {
  let component: SelectedcandidateComponent;
  let fixture: ComponentFixture<SelectedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
