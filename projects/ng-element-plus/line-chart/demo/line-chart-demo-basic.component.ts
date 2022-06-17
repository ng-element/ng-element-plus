import { Component } from '@angular/core';

@Component({
  selector: 'np-demo-line-chart-basic',
  template: `
    <np-line-chart [option]="option"></np-line-chart>
  `
})

export class NpDemoLineChartBasicComponent {
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
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
}
