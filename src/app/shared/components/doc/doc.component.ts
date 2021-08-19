import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AppService } from './../../../app.service';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DocComponent implements OnInit {
  @Input() docUrl = '';
  doc = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.appService.getDoc(this.docUrl).subscribe((data) => {
      this.doc = data;
    });
  }
}
