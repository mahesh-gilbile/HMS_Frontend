import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessWeeklyMenuComponent } from './mess-weekly-menu.component';

describe('MessWeeklyMenuComponent', () => {
  let component: MessWeeklyMenuComponent;
  let fixture: ComponentFixture<MessWeeklyMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessWeeklyMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessWeeklyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
