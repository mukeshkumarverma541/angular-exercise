import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseBlockComponent } from './else-block.component';

describe('ElseBlockComponent', () => {
  let component: ElseBlockComponent;
  let fixture: ComponentFixture<ElseBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElseBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElseBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
