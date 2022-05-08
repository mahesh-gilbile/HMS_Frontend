import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretoryAllStdAllotmentComponent } from './secretory-all-std-allotment.component';

describe('SecretoryAllStdAllotmentComponent', () => {
  let component: SecretoryAllStdAllotmentComponent;
  let fixture: ComponentFixture<SecretoryAllStdAllotmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretoryAllStdAllotmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretoryAllStdAllotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
