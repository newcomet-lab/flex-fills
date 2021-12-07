import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositeEditComponent } from './deposite-edit.component';

describe('DepositeEditComponent', () => {
  let component: DepositeEditComponent;
  let fixture: ComponentFixture<DepositeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositeEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
