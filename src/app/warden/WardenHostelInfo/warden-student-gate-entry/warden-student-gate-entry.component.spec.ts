import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenStudentGateEntryComponent } from './warden-student-gate-entry.component';

describe('WardenStudentGateEntryComponent', () => {
  let component: WardenStudentGateEntryComponent;
  let fixture: ComponentFixture<WardenStudentGateEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenStudentGateEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenStudentGateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
