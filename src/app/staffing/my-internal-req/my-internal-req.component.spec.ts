import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInternalReqComponent } from './my-internal-req.component';

describe('MyInternalReqComponent', () => {
  let component: MyInternalReqComponent;
  let fixture: ComponentFixture<MyInternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyInternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyInternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
