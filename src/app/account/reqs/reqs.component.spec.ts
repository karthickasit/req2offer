import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqsComponent } from './reqs.component';

describe('ReqsComponent', () => {
  let component: ReqsComponent;
  let fixture: ComponentFixture<ReqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
