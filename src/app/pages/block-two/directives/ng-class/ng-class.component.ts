import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  isMain = true;

  getClass(): string[] {
    if (this.isMain) {
      return ['big', 'primary'];
    }

    return ['small'];
  }
}
