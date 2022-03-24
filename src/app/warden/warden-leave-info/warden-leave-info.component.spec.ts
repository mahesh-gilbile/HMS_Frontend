import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenLeaveInfoComponent } from './warden-leave-info.component';

describe('WardenLeaveInfoComponent', () => {
  let component: WardenLeaveInfoComponent;
  let fixture: ComponentFixture<WardenLeaveInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenLeaveInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenLeaveInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
