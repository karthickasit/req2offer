import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudashboardComponent } from './budashboard.component';

describe('BudashboardComponent', () => {
  let component: BudashboardComponent;
  let fixture: ComponentFixture<BudashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
