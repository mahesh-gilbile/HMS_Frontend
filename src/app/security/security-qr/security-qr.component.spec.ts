import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityQRComponent } from './security-qr.component';

describe('SecurityQRComponent', () => {
  let component: SecurityQRComponent;
  let fixture: ComponentFixture<SecurityQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
