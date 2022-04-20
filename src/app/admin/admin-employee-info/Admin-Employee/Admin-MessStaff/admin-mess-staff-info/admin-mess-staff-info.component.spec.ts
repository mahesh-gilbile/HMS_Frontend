import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessStaffInfoComponent } from './admin-mess-staff-info.component';

describe('AdminMessStaffInfoComponent', () => {
  let component: AdminMessStaffInfoComponent;
  let fixture: ComponentFixture<AdminMessStaffInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMessStaffInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMessStaffInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
