import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenHeaderComponent } from './warden-header.component';

describe('WardenHeaderComponent', () => {
  let component: WardenHeaderComponent;
  let fixture: ComponentFixture<WardenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
