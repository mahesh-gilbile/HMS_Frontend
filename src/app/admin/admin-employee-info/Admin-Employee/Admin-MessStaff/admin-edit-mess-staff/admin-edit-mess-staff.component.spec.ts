import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditMessStaffComponent } from './admin-edit-mess-staff.component';

describe('AdminEditMessStaffComponent', () => {
  let component: AdminEditMessStaffComponent;
  let fixture: ComponentFixture<AdminEditMessStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditMessStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditMessStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
