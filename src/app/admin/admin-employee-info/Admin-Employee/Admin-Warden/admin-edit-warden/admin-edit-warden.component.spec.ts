import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditWardenComponent } from './admin-edit-warden.component';

describe('AdminEditWardenComponent', () => {
  let component: AdminEditWardenComponent;
  let fixture: ComponentFixture<AdminEditWardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditWardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
