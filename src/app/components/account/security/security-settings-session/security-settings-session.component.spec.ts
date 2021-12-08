import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySettingsSessionComponent } from './security-settings-session.component';

describe('SecuritySettingsSessionComponent', () => {
  let component: SecuritySettingsSessionComponent;
  let fixture: ComponentFixture<SecuritySettingsSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySettingsSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySettingsSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
