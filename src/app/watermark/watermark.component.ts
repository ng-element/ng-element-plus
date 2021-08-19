import { Component } from '@angular/core';

@Component({
  selector: 'app-watermark',
  templateUrl: './watermark.component.html',
  styleUrls: ['./watermark.component.scss'],
  host: {
    '[class]': `'article'`
  }
})

export class WatermarkComponent { }
