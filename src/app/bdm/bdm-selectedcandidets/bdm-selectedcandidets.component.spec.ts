import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmSelectedcandidetsComponent } from './bdm-selectedcandidets.component';

describe('BdmSelectedcandidetsComponent', () => {
  let component: BdmSelectedcandidetsComponent;
  let fixture: ComponentFixture<BdmSelectedcandidetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmSelectedcandidetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmSelectedcandidetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
