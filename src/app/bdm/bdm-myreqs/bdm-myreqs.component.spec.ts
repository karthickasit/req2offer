import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BdmMyreqsComponent } from './bdm-myreqs.component';

describe('BdmMyreqsComponent', () => {
  let component: BdmMyreqsComponent;
  let fixture: ComponentFixture<BdmMyreqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BdmMyreqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BdmMyreqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
