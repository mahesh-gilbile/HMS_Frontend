import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryApplyLeaveComponent } from './secretory-apply-leave.component';

describe('SecretoryApplyLeaveComponent', () => {
  let component: SecretoryApplyLeaveComponent;
  let fixture: ComponentFixture<SecretoryApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryApplyLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
