import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RqsComponent } from './rqs.component';

describe('RqsComponent', () => {
  let component: RqsComponent;
  let fixture: ComponentFixture<RqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
