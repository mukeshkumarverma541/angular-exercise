import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenBlockComponent } from './then-block.component';

describe('ThenBlockComponent', () => {
  let component: ThenBlockComponent;
  let fixture: ComponentFixture<ThenBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThenBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThenBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
