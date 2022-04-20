import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWardenInfoComponent } from './admin-warden-info.component';

describe('AdminWardenInfoComponent', () => {
  let component: AdminWardenInfoComponent;
  let fixture: ComponentFixture<AdminWardenInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWardenInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWardenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
