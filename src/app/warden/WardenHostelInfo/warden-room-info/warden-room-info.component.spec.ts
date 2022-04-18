import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenRoomInfoComponent } from './warden-room-info.component';

describe('WardenRoomInfoComponent', () => {
  let component: WardenRoomInfoComponent;
  let fixture: ComponentFixture<WardenRoomInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenRoomInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenRoomInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
