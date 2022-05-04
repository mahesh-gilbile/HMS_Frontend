import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryRoomListComponent } from './secretory-room-list.component';

describe('SecretoryRoomListComponent', () => {
  let component: SecretoryRoomListComponent;
  let fixture: ComponentFixture<SecretoryRoomListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryRoomListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
