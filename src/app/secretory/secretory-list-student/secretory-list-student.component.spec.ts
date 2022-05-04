import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryListStudentComponent } from './secretory-list-student.component';

describe('SecretoryListStudentComponent', () => {
  let component: SecretoryListStudentComponent;
  let fixture: ComponentFixture<SecretoryListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryListStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
