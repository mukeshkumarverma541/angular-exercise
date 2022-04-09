import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComp4Component } from './sb-comp4.component';

describe('SbComp4Component', () => {
  let component: SbComp4Component;
  let fixture: ComponentFixture<SbComp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbComp4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
