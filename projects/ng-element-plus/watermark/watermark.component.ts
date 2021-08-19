import { AfterContentInit, Component, Input } from '@angular/core';

@Component({
  selector: '[np-watermark]',
  templateUrl: './watermark.component.html',
  host: {
    class: 'mp-watermark',
    '[style.background-image]': 'backgroundImg'
  }
})

export class NpWatermarkComponent implements AfterContentInit {
  @Input() npText = '';
  backgroundImg = '';

  constructor() { }

  ngAfterContentInit() {
    const watermarkImg = this.getWatermark();
    this.backgroundImg = `url(${watermarkImg})`;
  }

  getWatermark() {
    let watermark = '';
    const canvas = document.createElement('canvas');
    canvas.width = 332;
    canvas.height = 286;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(24,144,255,0.15)';
      ctx.font = '16px Georgia';
      ctx.setTransform(1, -0.4, 0.4, 1, 0, 0);
      ctx.fillText(this.npText, 10, 100);
      watermark = canvas.toDataURL('image/png');
    }
    return watermark;
  }
}
