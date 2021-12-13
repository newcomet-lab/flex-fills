import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { depth } from '../../../../assets/demo/chart_data';

@Component({
  selector: 'app-hc-depth-chart',
  templateUrl: './hc-depth-chart.component.html',
  styleUrls: ['./hc-depth-chart.component.scss']
})
export class HcDepthChartComponent implements OnInit {

  isLoading = true;
  updateChart = false;

  highcharts = Highcharts;
  chartOptions: any;

  constructor() {
    this.chartOptions = {
      chart: {
        type: 'area',
        zoomType: 'xy',
        backgroundColor: '#131722'
      },
      stockTools: { gui: { enabled: false } },
      title: {
        text: 'ETH-BTC Market Depth'
      },
      xAxis: {
        minPadding: 0,
        maxPadding: 0,
        plotLines: [
          {
            color: '#888',
            value: 0,
            width: 1,
            label: {
              text: 'Actual price',
              rotation: 90
            }
          }
        ],
        title: {
          text: 'Price'
        }
      },
      yAxis: [
        {
          lineWidth: 1,
          gridLineWidth: 1,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',
          labels: {
            align: 'left',
            x: 8
          }
        },
        {
          opposite: true,
          linkedTo: 0,
          lineWidth: 1,
          gridLineWidth: 0,
          title: null,
          tickWidth: 1,
          tickLength: 5,
          tickPosition: 'inside',
          labels: {
            align: 'right',
            x: -8
          }
        }
      ],
      legend: {
        enabled: false
      },
      plotOptions: {
        area: {
          fillOpacity: 0.2,
          lineWidth: 1,
          step: 'center'
        }
      },
      tooltip: {
        headerFormat:
          '<span style="font-size=10px;">Price: {point.key}</span><br/>',
        valueDecimals: 2
      },
      series: [
        {
          name: 'Bids',
          data: [],
          color: '#03a7a8'
        },
        {
          name: 'Asks',
          data: [],
          color: '#fc5857'
        }
      ]
    };
  }

  ngOnInit(): void {
    this.chartOptions.series[0].data = depth['bids'];
    this.chartOptions.series[1].data = depth['asks'];
    this.chartOptions.xAxis.plotLines[0].value = depth['currentValue'];
    this.isLoading = false;
  }

}
