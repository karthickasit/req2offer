import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalreqsComponent } from './internalreqs.component';

describe('InternalreqsComponent', () => {
  let component: InternalreqsComponent;
  let fixture: ComponentFixture<InternalreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
