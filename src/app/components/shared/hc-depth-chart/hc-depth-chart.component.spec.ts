import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcDepthChartComponent } from './hc-depth-chart.component';

describe('HcDepthChartComponent', () => {
  let component: HcDepthChartComponent;
  let fixture: ComponentFixture<HcDepthChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcDepthChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcDepthChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
