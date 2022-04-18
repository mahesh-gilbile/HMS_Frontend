import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessQrHistoryComponent } from './mess-qr-history.component';

describe('MessQrHistoryComponent', () => {
  let component: MessQrHistoryComponent;
  let fixture: ComponentFixture<MessQrHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessQrHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessQrHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
