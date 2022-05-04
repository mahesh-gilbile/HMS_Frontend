import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryRoomAddComponent } from './secretory-room-add.component';

describe('SecretoryRoomAddComponent', () => {
  let component: SecretoryRoomAddComponent;
  let fixture: ComponentFixture<SecretoryRoomAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryRoomAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
