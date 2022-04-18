import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenStudentInfoComponent } from './warden-student-info.component';

describe('WardenStudentInfoComponent', () => {
  let component: WardenStudentInfoComponent;
  let fixture: ComponentFixture<WardenStudentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenStudentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenStudentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
