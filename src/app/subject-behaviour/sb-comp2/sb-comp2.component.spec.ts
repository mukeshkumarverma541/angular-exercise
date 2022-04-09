import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComp2Component } from './sb-comp2.component';

describe('SbComp2Component', () => {
  let component: SbComp2Component;
  let fixture: ComponentFixture<SbComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbComp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
