import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComp1Component } from './sb-comp1.component';

describe('SbComp1Component', () => {
  let component: SbComp1Component;
  let fixture: ComponentFixture<SbComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbComp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
