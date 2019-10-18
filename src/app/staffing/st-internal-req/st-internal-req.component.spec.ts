import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StInternalReqComponent } from './st-internal-req.component';

describe('StInternalReqComponent', () => {
  let component: StInternalReqComponent;
  let fixture: ComponentFixture<StInternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StInternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StInternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
