import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSecurityComponent } from './admin-edit-security.component';

describe('AdminEditSecurityComponent', () => {
  let component: AdminEditSecurityComponent;
  let fixture: ComponentFixture<AdminEditSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
