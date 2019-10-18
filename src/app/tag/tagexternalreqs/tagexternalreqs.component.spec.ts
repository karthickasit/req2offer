import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagexternalreqsComponent } from './tagexternalreqs.component';

describe('TagexternalreqsComponent', () => {
  let component: TagexternalreqsComponent;
  let fixture: ComponentFixture<TagexternalreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagexternalreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagexternalreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
