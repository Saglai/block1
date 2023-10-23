import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  title = 'Data binding title';
  isDisable = true;
  text = 'Inner Html text';
  url = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  value = '';
  name = '';

  saveTo() {
    console.log('save');
  }

  handleInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }

  handle(value: string) {
    console.log(value);
  }
}
