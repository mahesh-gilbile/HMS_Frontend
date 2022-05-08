import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAltStdComponent } from './not-alt-std.component';

describe('NotAltStdComponent', () => {
  let component: NotAltStdComponent;
  let fixture: ComponentFixture<NotAltStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotAltStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAltStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
