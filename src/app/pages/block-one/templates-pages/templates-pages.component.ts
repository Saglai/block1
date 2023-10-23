import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-templates-pages',
  templateUrl: './templates-pages.component.html',
  styleUrls: ['./templates-pages.component.css']
})
export class TemplatesPagesComponent {
  userName = 'John';
  
  constructor() {}
    
  @ViewChild('templateRef', {read: TemplateRef, static: false}) 
  template!: TemplateRef<any>

  @ViewChild('refContainer', {read: ViewContainerRef, static: false})
  viewContainerRef!: ViewContainerRef

  buttonClick(event: Event) {
    console.log(event);
  }

  show() {
    this.viewContainerRef.createEmbeddedView(this.template)
  }

  hide() {
    this.viewContainerRef.clear();
  }
}
