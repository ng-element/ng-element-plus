import { AfterViewInit, Component, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'np-bar-chart',
  templateUrl: './bar-chart.component.html'
})

export class NpBarChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('main') mainRef!: ElementRef;
  @Input() option: any;
  @Input() width = '100%';
  @Input() height = '300px';
  chartInstance!: echarts.EChartsType;

  ngAfterViewInit(): void {
    this.chartInstance = echarts.init(this.mainRef.nativeElement);

    this.option && this.chartInstance.setOption(this.option);
  }

  ngOnDestroy(): void {

  }
}
