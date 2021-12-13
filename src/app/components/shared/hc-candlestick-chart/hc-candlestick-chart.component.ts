import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';

import { ohlcv } from '../../../../assets/demo/chart_data';

@Component({
  selector: 'app-hc-candlestick-chart',
  templateUrl: './hc-candlestick-chart.component.html',
  styleUrls: ['./hc-candlestick-chart.component.scss']
})
export class HcCandlestickChartComponent implements OnInit {

  isLoading = true;
  updateChart = false;

  highcharts = Highcharts;
  chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        backgroundColor: '#131722'
      },
      rangeSelector: {
        // selected: 0,
        enabled: true
      },
      navigator: { enabled: true },
      legend: { enabled: false },
      yAxis: [
        {
          title: 'y1',
          labels: {
            enabled: true,
            x: -15
          },
          height: '80%',
          resize: {
            enabled: true
          }
        },
        {
          title: 'y2',
          labels: {
            enabled: false
          },
          top: '80%',
          height: '20%',
          offset: 0
        }
      ],
      series: [
        {
          type: 'candlestick',
          id: 'aapl-candlestick',
          name: 'AAPL Stock Price',
          data: [],
          yAxis: 0,
          color: '#cf6753',
          upColor: '#83ad91'
        },
        {
          type: 'column',
          id: 'aapl-volume',
          name: 'AAPL Volume',
          data: [],
          yAxis: 1
        }
      ],
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 800
            },
            chartOptions: {
              rangeSelector: {
                inputEnabled: false
              }
            }
          }
        ]
      }
    };
  }

  ngOnInit(): void {
    this.setChart(ohlcv);
  }

  setChart(chartDate: any) {
    const formData = this.formattingData(chartDate);
    this.chartOptions.series[0].data = formData.ohlc;
    this.chartOptions.series[1].data = formData.volume;
    this.isLoading = false;
    // trigger ngOnChanges
    this.updateChart = true;
  }

  formattingData(data: number[][]) {
    const ohlc = [];
    const volume = [];
    for (let i = 0; i < data.length; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][1], // open
        data[i][2], // high
        data[i][3], // low
        data[i][4] // close
      ]);

      volume.push([
        data[i][0], // the date
        data[i][5] // the volume
      ]);
    }
    return { ohlc, volume };
  }

}
