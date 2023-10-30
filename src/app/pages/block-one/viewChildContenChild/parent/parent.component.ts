import { AfterViewInit, Component, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{
  text = '';

  @ViewChild(ChildComponent) child!: ChildComponent;
  @ViewChild('ref') ngTemplate!: TemplateRef<any>;
  @ViewChild('divBlock') divElement!: ElementRef;
  @ViewChildren(ChildComponent) childList!: QueryList<ChildComponent> 

  

  ngAfterViewInit() {
    console.log(this.divElement);
    
    this.child.log();
    this.text = this.child.text;

    this.divElement.nativeElement.innerText = 'Updated div block';
    this.childList.forEach(child => console.log(child));
  }
}
