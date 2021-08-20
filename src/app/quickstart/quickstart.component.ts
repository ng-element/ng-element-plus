import { Component } from '@angular/core';

@Component({
  selector: 'app-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.scss']
})

export class QuickstartComponent {
  quickstartCss =
    `{
  "styles": [
    "node_modules/ng-element-plus/ng-element-plus.css"
  ]
}`;
  quickstart =
    `import { NpWatermarkModule } from 'ng-element-plus/watermark';
……

@NgModule({
  imports: [
    NpWatermarkModule
    ……
  ]
})`;
}