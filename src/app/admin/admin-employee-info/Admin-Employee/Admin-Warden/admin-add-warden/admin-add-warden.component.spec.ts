import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddWardenComponent } from './admin-add-warden.component';

describe('AdminAddWardenComponent', () => {
  let component: AdminAddWardenComponent;
  let fixture: ComponentFixture<AdminAddWardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddWardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddWardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
