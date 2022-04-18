import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMessHistoryDetailsComponent } from './student-mess-history-details.component';

describe('StudentMessHistoryDetailsComponent', () => {
  let component: StudentMessHistoryDetailsComponent;
  let fixture: ComponentFixture<StudentMessHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentMessHistoryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentMessHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
