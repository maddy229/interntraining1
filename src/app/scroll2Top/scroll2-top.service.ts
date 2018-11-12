import { Component, Injectable, ViewChild, ElementRef,Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ngx-page-scroll';
 

@Injectable({
  providedIn: 'root'
})


export class Scroll2TopService {

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
  }
  s2t()
  {
    const i = Math.floor(Math.random()*10);
    window.alert(i);

    if(i!=1)
    {
     
    }
    
  }
  
}
