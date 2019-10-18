import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrInternalReqComponent } from './hr-internal-req.component';

describe('HrInternalReqComponent', () => {
  let component: HrInternalReqComponent;
  let fixture: ComponentFixture<HrInternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrInternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrInternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
