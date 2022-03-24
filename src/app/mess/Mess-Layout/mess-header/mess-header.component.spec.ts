import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessHeaderComponent } from './mess-header.component';

describe('MessHeaderComponent', () => {
  let component: MessHeaderComponent;
  let fixture: ComponentFixture<MessHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
