import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
// import * as hljs from 'highlight.js/lib/core';
// import shell from 'highlight.js/lib/languages/shell';
// import typescript from 'highlight.js/lib/languages/typescript';
// import xml from 'highlight.js/lib/languages/xml';
// import css from 'highlight.js/lib/languages/css';
// hljs.registerLanguage('shell', shell);
// hljs.registerLanguage('typescript', typescript);
// hljs.registerLanguage('xml', xml);
// hljs.registerLanguage('css', css);
import 'prismjs';
import 'prismjs/components/prism-typescript';
import './angular-marked';

declare var Prism: any;

@Pipe({ name: 'highlightAuto' })
export class HighLightPipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer
  ) { }

  transform(value: string): SafeHtml {
    // const relevanceHandle: any = hljs.highlightAuto(value, ['shell', 'typescript', 'xml', 'css']);
    // return this.sanitizer.bypassSecurityTrustHtml(relevanceHandle.value);
    const relevanceHandle = Prism.highlight(value, Prism.languages.angular, 'angular');
    return this.sanitizer.bypassSecurityTrustHtml(relevanceHandle);
  }
}
