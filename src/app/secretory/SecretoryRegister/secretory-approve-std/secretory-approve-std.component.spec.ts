import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryApproveStdComponent } from './secretory-approve-std.component';

describe('SecretoryApproveStdComponent', () => {
  let component: SecretoryApproveStdComponent;
  let fixture: ComponentFixture<SecretoryApproveStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryApproveStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryApproveStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
