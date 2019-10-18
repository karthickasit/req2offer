import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcselectedcandidatesComponent } from './acselectedcandidates.component';

describe('AcselectedcandidatesComponent', () => {
  let component: AcselectedcandidatesComponent;
  let fixture: ComponentFixture<AcselectedcandidatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcselectedcandidatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcselectedcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
