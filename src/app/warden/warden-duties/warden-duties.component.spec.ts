import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenDutiesComponent } from './warden-duties.component';

describe('WardenDutiesComponent', () => {
  let component: WardenDutiesComponent;
  let fixture: ComponentFixture<WardenDutiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenDutiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
