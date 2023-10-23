import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-another-parent',
  templateUrl: './another-parent.component.html',
  styleUrls: ['./another-parent.component.css']
})
export class AnotherParentComponent implements OnChanges, DoCheck {
  user = {
    name: 'Doe'
  };

  login = 'Admin';

  changeUser() {
    this.user.name = 'Tom';
  }

  showEvent(event: Event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChange')
  }

  ngDoCheck(): void {
    console.log('Parent DoCheck');
  }
}
