import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityChangePasswordComponent } from './security-change-password.component';

describe('SecurityChangePasswordComponent', () => {
  let component: SecurityChangePasswordComponent;
  let fixture: ComponentFixture<SecurityChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
