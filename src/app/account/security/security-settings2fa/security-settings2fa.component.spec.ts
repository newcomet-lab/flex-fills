import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySettings2faComponent } from './security-settings2fa.component';

describe('SecuritySettings2faComponent', () => {
  let component: SecuritySettings2faComponent;
  let fixture: ComponentFixture<SecuritySettings2faComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySettings2faComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySettings2faComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
