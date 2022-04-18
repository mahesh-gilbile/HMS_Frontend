import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveInfoComponent } from './admin-leave-info.component';

describe('AdminLeaveInfoComponent', () => {
  let component: AdminLeaveInfoComponent;
  let fixture: ComponentFixture<AdminLeaveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
