import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { NelMessageService } from 'ng-element-ui/message';
import { HighLightPipe } from '../../pipe';
import { AppService } from './../../../app.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  providers: [HighLightPipe],
  animations: [
    trigger('state', [
      state('false', style({
        opacity: 0,
        display: 'none',
      })),
      state('true', style({
        opacity: 1,
        display: 'inline-block',
      })),
      transition('false <=> true', animate(`300ms ease-in-out`)),
    ]),
    trigger('expand', [
      state('false', style({
        height: 0,
      })),
      state('true', style({
        height: '*',
      })),
      transition('* => *', animate(`250ms ease-in-out`)),
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DemoComponent implements OnInit {
  @Input() codeUrl?: string;
  @Input() notes = '';
  @Input('class') parentClass: new ([key]?: any) => {} = class { };
  code = '';
  classes = '';
  hovering = false;
  isExpanded = false;
  safeNotes?: SafeHtml;

  constructor(
    private location: Location,
    private sanitizer: DomSanitizer,
    private message: NelMessageService,
    private appService: AppService
  ) { }

  showCode(): void {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.hovering = false;
    }
  }

  ngOnInit(): void {
    this.safeNotes = this.sanitizer.bypassSecurityTrustHtml(this.notes);
    const url = this.location.path();
    const path = url.slice(url.lastIndexOf('/') + 1);
    this.classes += ` demo-${path}`;

    if (this.codeUrl) {
      this.appService.getCode(this.codeUrl).subscribe((data) => {
        this.code = data;
      });
    }
    // this.code = this.el.nativeElement.querySelector('.source').innerHTML
    // this.code = this.code.replace(/=""/g, '')
    //   .replace(/<!---->/g, '')
  }

  copy(event: boolean): void {
    if (event) {
      this.message.success('复制成功');
    } else {
      this.message.error('复制失败');
    }
  }
}
