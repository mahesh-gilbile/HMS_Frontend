import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessSideNavComponent } from './mess-side-nav.component';

describe('MessSideNavComponent', () => {
  let component: MessSideNavComponent;
  let fixture: ComponentFixture<MessSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
