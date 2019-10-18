import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmexternalsComponent } from './fmexternals.component';

describe('FmexternalsComponent', () => {
  let component: FmexternalsComponent;
  let fixture: ComponentFixture<FmexternalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmexternalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmexternalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
