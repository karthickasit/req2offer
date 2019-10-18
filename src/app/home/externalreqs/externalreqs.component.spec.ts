import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalreqsComponent } from './externalreqs.component';

describe('ExternalreqsComponent', () => {
  let component: ExternalreqsComponent;
  let fixture: ComponentFixture<ExternalreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
