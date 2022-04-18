import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenWingInfoComponent } from './warden-wing-info.component';

describe('WardenWingInfoComponent', () => {
  let component: WardenWingInfoComponent;
  let fixture: ComponentFixture<WardenWingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenWingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenWingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
