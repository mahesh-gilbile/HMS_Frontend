import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryRoomEditComponent } from './secretory-room-edit.component';

describe('SecretoryRoomEditComponent', () => {
  let component: SecretoryRoomEditComponent;
  let fixture: ComponentFixture<SecretoryRoomEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryRoomEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryRoomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
