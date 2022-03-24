import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRoomDetailsComponent } from './student-room-details.component';

describe('StudentRoomDetailsComponent', () => {
  let component: StudentRoomDetailsComponent;
  let fixture: ComponentFixture<StudentRoomDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentRoomDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
