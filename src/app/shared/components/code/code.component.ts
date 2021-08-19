import { Component, Input } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})

export class CodeComponent {
  @Input() code?: string;

  constructor(
    private message: NelMessageService
  ) { }

  copy(event: boolean): void {
    if (event) {
      this.message.success('复制成功');
    } else {
      this.message.error('复制失败');
    }
  }
}
