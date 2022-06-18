import { Component, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';
import * as echarts from 'echarts';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'np-pie-chart',
  templateUrl: './pie-chart.component.html'
})

export class NpPieChartComponent implements AfterViewInit, OnDestroy {
  @ViewChild('main') mainRef!: ElementRef;
  @Input() option: any;
  @Input() width = '100%';
  @Input() height = '300px';
  @Input() autoResize = true;
  chartInstance!: echarts.EChartsType;
  ro?: ResizeObserver;

  ngAfterViewInit(): void {
    this.chartInstance = echarts.init(this.mainRef.nativeElement);

    this.option && this.chartInstance.setOption(this.option);

    if (this.autoResize) {
      this.ro = new ResizeObserver(() => {
        this.chartInstance.resize();
      });

      this.ro.observe(this.mainRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.ro) {
      this.ro.unobserve(this.mainRef.nativeElement);
    }
  }
}
