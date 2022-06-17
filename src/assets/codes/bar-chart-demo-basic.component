import { Component } from '@angular/core';

@Component({
  selector: 'np-demo-bar-chart-basic',
  template: `
    <np-bar-chart [option]="option"></np-bar-chart>
  `
})

export class NpDemoBarChartBasicComponent {
  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
}
