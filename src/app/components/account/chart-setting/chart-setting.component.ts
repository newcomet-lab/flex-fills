import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chart-setting',
  templateUrl: './chart-setting.component.html',
  styleUrls: ['./chart-setting.component.scss']
})
export class ChartSettingComponent implements OnInit {

  chartValue = 'area';
  chartList = [{
    label: 'Line',
    type: 'line'
  }, {
    label: 'Area',
    type: 'area'
  }, {
    label: 'Candle Stick',
    type: 'candlestick'
  }];

  colorThemeValue = 'Classic';
  colorThemeList = [
    'Default',
    'Classic',
    'Hight contrast'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  changeType() {
  }

}
