import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  codeMap = new Map<string, string>();
  docMap = new Map<string, string>();

  constructor(private http: HttpClient) { }

  getCode(componentId: string): Observable<any> {
    if (this.codeMap.has(componentId)) {
      return of(this.codeMap.get(componentId) as string);
    } else {
      const path = componentId.startsWith('components-') ? componentId.split('components-')[1] : componentId;
      return this.http.get(`assets/codes/${path}`, { responseType: 'text' })
        .pipe(tap(data => {
          this.codeMap.set(componentId, data);
        }));
    }
  }

  getDoc(componentId: string): Observable<any> {
    if (this.docMap.has(componentId)) {
      return of(this.docMap.get(componentId) as string);
    } else {
      const path = componentId.startsWith('components-') ? componentId.split('components-')[1] : componentId;
      return this.http.get(`assets/docs/${path}`, { responseType: 'text' })
        .pipe(tap((data) => {
          this.docMap.set(componentId, data);
        }));
    }
  }
}
