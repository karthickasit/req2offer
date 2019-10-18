import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FminternalsComponent } from './fminternals.component';

describe('FminternalsComponent', () => {
  let component: FminternalsComponent;
  let fixture: ComponentFixture<FminternalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FminternalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FminternalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
