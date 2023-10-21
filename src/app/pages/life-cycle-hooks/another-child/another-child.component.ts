import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-another-child',
  templateUrl: './another-child.component.html',
  styleUrls: ['./another-child.component.css']
})
export class AnotherChildComponent implements OnChanges, DoCheck {

  @Input() user?: any;
  @Input() login!: string;
  @Output() clickButtonEvent = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges');
    console.log(JSON.stringify(changes));
  }

  ngDoCheck(): void {
    console.log('Child DoCheck');
  }

  trigger($event: Event) {
    this.clickButtonEvent.emit($event);
  }
}
