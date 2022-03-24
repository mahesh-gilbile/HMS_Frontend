import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFeesDetailsComponent } from './student-fees-details.component';

describe('StudentFeesDetailsComponent', () => {
  let component: StudentFeesDetailsComponent;
  let fixture: ComponentFixture<StudentFeesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentFeesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFeesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
