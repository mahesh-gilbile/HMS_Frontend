import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeeInfoComponent } from './admin-employee-info.component';

describe('AdminEmployeeInfoComponent', () => {
  let component: AdminEmployeeInfoComponent;
  let fixture: ComponentFixture<AdminEmployeeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEmployeeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
