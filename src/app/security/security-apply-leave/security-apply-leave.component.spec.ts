import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityApplyLeaveComponent } from './security-apply-leave.component';

describe('SecurityApplyLeaveComponent', () => {
  let component: SecurityApplyLeaveComponent;
  let fixture: ComponentFixture<SecurityApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityApplyLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
