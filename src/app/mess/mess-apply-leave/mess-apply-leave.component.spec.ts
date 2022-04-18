import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessApplyLeaveComponent } from './mess-apply-leave.component';

describe('MessApplyLeaveComponent', () => {
  let component: MessApplyLeaveComponent;
  let fixture: ComponentFixture<MessApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessApplyLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
