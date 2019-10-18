import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmdashboardComponent } from './fmdashboard.component';

describe('FmdashboardComponent', () => {
  let component: FmdashboardComponent;
  let fixture: ComponentFixture<FmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
