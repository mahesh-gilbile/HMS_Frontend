import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessTodayHistoryComponent } from './mess-today-history.component';

describe('MessTodayHistoryComponent', () => {
  let component: MessTodayHistoryComponent;
  let fixture: ComponentFixture<MessTodayHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessTodayHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessTodayHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
