import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  isPrimary = false;

  getColor(): string {
    if (this.isPrimary) {
      return 'primary';
    }

    return 'secondary';
  }
}
