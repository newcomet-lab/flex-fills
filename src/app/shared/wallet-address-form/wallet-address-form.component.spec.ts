import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletAddressFormComponent } from './wallet-address-form.component';

describe('WalletAddressFormComponent', () => {
  let component: WalletAddressFormComponent;
  let fixture: ComponentFixture<WalletAddressFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WalletAddressFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletAddressFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
