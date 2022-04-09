import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpUsersComponent } from './http-users.component';

describe('HttpUsersComponent', () => {
  let component: HttpUsersComponent;
  let fixture: ComponentFixture<HttpUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
