import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritySettingsWithdrawalComponent } from './security-settings-withdrawal.component';

describe('SecuritySettingsWithdrawalComponent', () => {
  let component: SecuritySettingsWithdrawalComponent;
  let fixture: ComponentFixture<SecuritySettingsWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritySettingsWithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritySettingsWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
