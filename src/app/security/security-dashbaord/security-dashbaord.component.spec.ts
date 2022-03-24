import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityDashbaordComponent } from './security-dashbaord.component';

describe('SecurityDashbaordComponent', () => {
  let component: SecurityDashbaordComponent;
  let fixture: ComponentFixture<SecurityDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityDashbaordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
