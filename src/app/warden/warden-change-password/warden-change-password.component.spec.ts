import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenChangePasswordComponent } from './warden-change-password.component';

describe('WardenChangePasswordComponent', () => {
  let component: WardenChangePasswordComponent;
  let fixture: ComponentFixture<WardenChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
