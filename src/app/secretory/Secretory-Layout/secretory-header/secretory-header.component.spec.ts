import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryHeaderComponent } from './secretory-header.component';

describe('SecretoryHeaderComponent', () => {
  let component: SecretoryHeaderComponent;
  let fixture: ComponentFixture<SecretoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
