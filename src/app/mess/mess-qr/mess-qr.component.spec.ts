import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessQRComponent } from './mess-qr.component';

describe('MessQRComponent', () => {
  let component: MessQRComponent;
  let fixture: ComponentFixture<MessQRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessQRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
