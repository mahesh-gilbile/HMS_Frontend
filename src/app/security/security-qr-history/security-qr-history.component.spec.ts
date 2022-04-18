import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQrHistoryComponent } from './security-qr-history.component';

describe('SecurityQrHistoryComponent', () => {
  let component: SecurityQrHistoryComponent;
  let fixture: ComponentFixture<SecurityQrHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQrHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQrHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
