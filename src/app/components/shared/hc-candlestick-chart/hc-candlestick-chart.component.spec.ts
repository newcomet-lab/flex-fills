import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcCandlestickChartComponent } from './hc-candlestick-chart.component';

describe('HcCandlestickChartComponent', () => {
  let component: HcCandlestickChartComponent;
  let fixture: ComponentFixture<HcCandlestickChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcCandlestickChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HcCandlestickChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
