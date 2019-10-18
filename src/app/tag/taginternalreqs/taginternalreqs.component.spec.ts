import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaginternalreqsComponent } from './taginternalreqs.component';

describe('TaginternalreqsComponent', () => {
  let component: TaginternalreqsComponent;
  let fixture: ComponentFixture<TaginternalreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaginternalreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaginternalreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
