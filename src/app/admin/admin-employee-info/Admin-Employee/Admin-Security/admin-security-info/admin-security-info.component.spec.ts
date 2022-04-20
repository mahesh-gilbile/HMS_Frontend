import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecurityInfoComponent } from './admin-security-info.component';

describe('AdminSecurityInfoComponent', () => {
  let component: AdminSecurityInfoComponent;
  let fixture: ComponentFixture<AdminSecurityInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSecurityInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecurityInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
