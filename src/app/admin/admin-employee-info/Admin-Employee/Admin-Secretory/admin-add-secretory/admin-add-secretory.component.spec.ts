import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddSecretoryComponent } from './admin-add-secretory.component';

describe('AdminAddSecretoryComponent', () => {
  let component: AdminAddSecretoryComponent;
  let fixture: ComponentFixture<AdminAddSecretoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddSecretoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddSecretoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
