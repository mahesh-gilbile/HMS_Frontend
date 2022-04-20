import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddMessStaffComponent } from './admin-add-mess-staff.component';

describe('AdminAddMessStaffComponent', () => {
  let component: AdminAddMessStaffComponent;
  let fixture: ComponentFixture<AdminAddMessStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddMessStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddMessStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
