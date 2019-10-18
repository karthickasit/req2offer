import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuMyreqsComponent } from './bu-myreqs.component';

describe('BuMyreqsComponent', () => {
  let component: BuMyreqsComponent;
  let fixture: ComponentFixture<BuMyreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuMyreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuMyreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
