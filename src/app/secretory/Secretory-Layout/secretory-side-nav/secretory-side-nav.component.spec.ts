import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretorySideNavComponent } from './secretory-side-nav.component';

describe('SecretorySideNavComponent', () => {
  let component: SecretorySideNavComponent;
  let fixture: ComponentFixture<SecretorySideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretorySideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretorySideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
