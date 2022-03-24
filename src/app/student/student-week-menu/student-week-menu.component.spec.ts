import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentWeekMenuComponent } from './student-week-menu.component';

describe('StudentWeekMenuComponent', () => {
  let component: StudentWeekMenuComponent;
  let fixture: ComponentFixture<StudentWeekMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentWeekMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentWeekMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
