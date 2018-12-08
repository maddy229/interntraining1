import { Component, Injectable, ViewChild, ElementRef,Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

  public goToHead2(): void {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#head2');
    this.pageScrollService.start(pageScrollInstance);
};    
}
