import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReqsOfSHComponent } from './my-reqs-of-sh.component';

describe('MyReqsOfSHComponent', () => {
  let component: MyReqsOfSHComponent;
  let fixture: ComponentFixture<MyReqsOfSHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyReqsOfSHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReqsOfSHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
