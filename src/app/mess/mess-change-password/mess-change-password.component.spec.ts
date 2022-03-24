import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessChangePasswordComponent } from './mess-change-password.component';

describe('MessChangePasswordComponent', () => {
  let component: MessChangePasswordComponent;
  let fixture: ComponentFixture<MessChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
