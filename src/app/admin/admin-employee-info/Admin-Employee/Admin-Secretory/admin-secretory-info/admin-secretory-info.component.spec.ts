import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSecretoryInfoComponent } from './admin-secretory-info.component';

describe('AdminSecretoryInfoComponent', () => {
  let component: AdminSecretoryInfoComponent;
  let fixture: ComponentFixture<AdminSecretoryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSecretoryInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSecretoryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
