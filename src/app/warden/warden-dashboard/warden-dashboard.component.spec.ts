import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenDashboardComponent } from './warden-dashboard.component';

describe('WardenDashboardComponent', () => {
  let component: WardenDashboardComponent;
  let fixture: ComponentFixture<WardenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
