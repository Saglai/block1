import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  text = 'Text in child component'

  @ContentChild('content') div?: ElementRef;
  @ContentChildren('content') divList?: QueryList<ElementRef>;

  log() {
    console.log('log in the Child component');
  }

  ngAfterContentInit() {
    if (this.div) {
      console.log(this.div);
      console.log(this.divList);
    }
  }
}
