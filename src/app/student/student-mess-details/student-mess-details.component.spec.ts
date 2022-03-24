import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMessDetailsComponent } from './student-mess-details.component';

describe('StudentMessDetailsComponent', () => {
  let component: StudentMessDetailsComponent;
  let fixture: ComponentFixture<StudentMessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMessDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
