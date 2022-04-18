import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenHostelInfoComponent } from './warden-hostel-info.component';

describe('WardenHostelInfoComponent', () => {
  let component: WardenHostelInfoComponent;
  let fixture: ComponentFixture<WardenHostelInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenHostelInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenHostelInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
