import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenApplyLeaveComponent } from './warden-apply-leave.component';

describe('WardenApplyLeaveComponent', () => {
  let component: WardenApplyLeaveComponent;
  let fixture: ComponentFixture<WardenApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenApplyLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
