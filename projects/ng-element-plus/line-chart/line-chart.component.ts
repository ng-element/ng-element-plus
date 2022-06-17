import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import * as echarts from 'echarts';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'np-line-chart',
  templateUrl: './line-chart.component.html'
})

export class NpLineChartComponent implements AfterViewInit, OnDestroy {
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
