import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagselectedcandidateComponent } from './tagselectedcandidate.component';

describe('TagselectedcandidateComponent', () => {
  let component: TagselectedcandidateComponent;
  let fixture: ComponentFixture<TagselectedcandidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagselectedcandidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagselectedcandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
