import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuSelectedcandidetsComponent } from './bu-selectedcandidets.component';

describe('BuSelectedcandidetsComponent', () => {
  let component: BuSelectedcandidetsComponent;
  let fixture: ComponentFixture<BuSelectedcandidetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuSelectedcandidetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuSelectedcandidetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
