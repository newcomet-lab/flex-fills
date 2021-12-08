import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenOrdersIndexComponent } from './open-orders-index.component';

describe('OpenOrdersIndexComponent', () => {
  let component: OpenOrdersIndexComponent;
  let fixture: ComponentFixture<OpenOrdersIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenOrdersIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenOrdersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
