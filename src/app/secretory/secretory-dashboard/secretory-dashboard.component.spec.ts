import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryDashboardComponent } from './secretory-dashboard.component';

describe('SecretoryDashboardComponent', () => {
  let component: SecretoryDashboardComponent;
  let fixture: ComponentFixture<SecretoryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
