import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenStudentListComponent } from './warden-student-list.component';

describe('WardenStudentListComponent', () => {
  let component: WardenStudentListComponent;
  let fixture: ComponentFixture<WardenStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
