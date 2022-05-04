import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryRoomAllotmentComponent } from './secretory-room-allotment.component';

describe('SecretoryRoomAllotmentComponent', () => {
  let component: SecretoryRoomAllotmentComponent;
  let fixture: ComponentFixture<SecretoryRoomAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryRoomAllotmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryRoomAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
