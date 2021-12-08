import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySettingsWhitelistComponent } from './security-settings-whitelist.component';

describe('SecuritySettingsWhitelistComponent', () => {
  let component: SecuritySettingsWhitelistComponent;
  let fixture: ComponentFixture<SecuritySettingsWhitelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySettingsWhitelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySettingsWhitelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
