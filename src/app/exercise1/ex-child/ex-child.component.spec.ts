import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExChildComponent } from './ex-child.component';

describe('ExChildComponent', () => {
  let component: ExChildComponent;
  let fixture: ComponentFixture<ExChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
