import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrExternalReqComponent } from './hr-external-req.component';

describe('HrExternalReqComponent', () => {
  let component: HrExternalReqComponent;
  let fixture: ComponentFixture<HrExternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrExternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrExternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
