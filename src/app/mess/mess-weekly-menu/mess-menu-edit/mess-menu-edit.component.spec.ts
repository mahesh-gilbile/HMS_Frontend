import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessMenuEditComponent } from './mess-menu-edit.component';

describe('MessMenuEditComponent', () => {
  let component: MessMenuEditComponent;
  let fixture: ComponentFixture<MessMenuEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessMenuEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessMenuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
