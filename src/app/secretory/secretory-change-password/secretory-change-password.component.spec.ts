import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryChangePasswordComponent } from './secretory-change-password.component';

describe('SecretoryChangePasswordComponent', () => {
  let component: SecretoryChangePasswordComponent;
  let fixture: ComponentFixture<SecretoryChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
