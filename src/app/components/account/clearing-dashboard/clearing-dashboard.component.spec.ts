import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearingDashboardComponent } from './clearing-dashboard.component';

describe('ClearingDashboardComponent', () => {
  let component: ClearingDashboardComponent;
  let fixture: ComponentFixture<ClearingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
