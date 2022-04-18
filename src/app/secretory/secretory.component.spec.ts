import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryComponent } from './secretory.component';

describe('SecretoryComponent', () => {
  let component: SecretoryComponent;
  let fixture: ComponentFixture<SecretoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
