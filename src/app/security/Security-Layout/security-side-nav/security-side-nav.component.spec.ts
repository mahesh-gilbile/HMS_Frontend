import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySideNavComponent } from './security-side-nav.component';

describe('SecuritySideNavComponent', () => {
  let component: SecuritySideNavComponent;
  let fixture: ComponentFixture<SecuritySideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
