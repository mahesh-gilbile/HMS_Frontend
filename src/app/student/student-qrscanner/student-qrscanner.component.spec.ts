import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQRScannerComponent } from './student-qrscanner.component';

describe('StudentQRScannerComponent', () => {
  let component: StudentQRScannerComponent;
  let fixture: ComponentFixture<StudentQRScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentQRScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentQRScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
