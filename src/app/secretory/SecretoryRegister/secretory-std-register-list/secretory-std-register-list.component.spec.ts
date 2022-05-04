import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryStdRegisterListComponent } from './secretory-std-register-list.component';

describe('SecretoryStdRegisterListComponent', () => {
  let component: SecretoryStdRegisterListComponent;
  let fixture: ComponentFixture<SecretoryStdRegisterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryStdRegisterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryStdRegisterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
