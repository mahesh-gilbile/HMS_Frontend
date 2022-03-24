import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardenSideNavComponent } from './warden-side-nav.component';

describe('WardenSideNavComponent', () => {
  let component: WardenSideNavComponent;
  let fixture: ComponentFixture<WardenSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardenSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardenSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
