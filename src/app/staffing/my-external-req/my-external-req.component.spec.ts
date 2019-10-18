import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExternalReqComponent } from './my-external-req.component';

describe('MyExternalReqComponent', () => {
  let component: MyExternalReqComponent;
  let fixture: ComponentFixture<MyExternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
