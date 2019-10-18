import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdashboardComponent } from './stdashboard.component';

describe('StdashboardComponent', () => {
  let component: StdashboardComponent;
  let fixture: ComponentFixture<StdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
