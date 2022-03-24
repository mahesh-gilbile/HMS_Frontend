import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGuardianDetailsComponent } from './student-guardian-details.component';

describe('StudentGuardianDetailsComponent', () => {
  let component: StudentGuardianDetailsComponent;
  let fixture: ComponentFixture<StudentGuardianDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGuardianDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGuardianDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
