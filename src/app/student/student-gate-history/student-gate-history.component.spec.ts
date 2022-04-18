import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGateHistoryComponent } from './student-gate-history.component';

describe('StudentGateHistoryComponent', () => {
  let component: StudentGateHistoryComponent;
  let fixture: ComponentFixture<StudentGateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGateHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
