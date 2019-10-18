import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StExternalReqComponent } from './st-external-req.component';

describe('StExternalReqComponent', () => {
  let component: StExternalReqComponent;
  let fixture: ComponentFixture<StExternalReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StExternalReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StExternalReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
