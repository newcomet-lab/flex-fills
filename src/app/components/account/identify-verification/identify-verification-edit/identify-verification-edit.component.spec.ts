import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVerificationEditComponent } from './identify-verification-edit.component';

describe('IdentifyVerificationEditComponent', () => {
  let component: IdentifyVerificationEditComponent;
  let fixture: ComponentFixture<IdentifyVerificationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVerificationEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVerificationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
