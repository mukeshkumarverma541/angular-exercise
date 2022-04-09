import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbComp3Component } from './sb-comp3.component';

describe('SbComp3Component', () => {
  let component: SbComp3Component;
  let fixture: ComponentFixture<SbComp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbComp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbComp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
