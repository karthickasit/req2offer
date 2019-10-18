import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmdashboardComponent } from './bdmdashboard.component';

describe('BdmdashboardComponent', () => {
  let component: BdmdashboardComponent;
  let fixture: ComponentFixture<BdmdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
