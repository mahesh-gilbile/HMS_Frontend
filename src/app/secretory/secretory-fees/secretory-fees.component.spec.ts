import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryFeesComponent } from './secretory-fees.component';

describe('SecretoryFeesComponent', () => {
  let component: SecretoryFeesComponent;
  let fixture: ComponentFixture<SecretoryFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryFeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
