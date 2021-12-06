import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationDetailComponent } from './identify-verification-detail.component';

describe('IdentifyVerificationDetailComponent', () => {
  let component: IdentifyVerificationDetailComponent;
  let fixture: ComponentFixture<IdentifyVerificationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
