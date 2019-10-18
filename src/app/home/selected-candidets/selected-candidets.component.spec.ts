import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCandidetsComponent } from './selected-candidets.component';

describe('SelectedCandidetsComponent', () => {
  let component: SelectedCandidetsComponent;
  let fixture: ComponentFixture<SelectedCandidetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedCandidetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedCandidetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
