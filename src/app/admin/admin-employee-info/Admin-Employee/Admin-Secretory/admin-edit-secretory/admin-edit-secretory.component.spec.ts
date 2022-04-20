import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditSecretoryComponent } from './admin-edit-secretory.component';

describe('AdminEditSecretoryComponent', () => {
  let component: AdminEditSecretoryComponent;
  let fixture: ComponentFixture<AdminEditSecretoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditSecretoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditSecretoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
