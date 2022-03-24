import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenComponent } from './warden.component';

describe('WardenComponent', () => {
  let component: WardenComponent;
  let fixture: ComponentFixture<WardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
