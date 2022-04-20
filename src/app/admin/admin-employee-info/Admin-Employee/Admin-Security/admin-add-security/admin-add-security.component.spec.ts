import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSecurityComponent } from './admin-add-security.component';

describe('AdminAddSecurityComponent', () => {
  let component: AdminAddSecurityComponent;
  let fixture: ComponentFixture<AdminAddSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
