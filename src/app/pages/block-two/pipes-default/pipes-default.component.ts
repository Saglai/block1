import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-default',
  templateUrl: './pipes-default.component.html',
  styleUrls: ['./pipes-default.component.css']
})
export class PipesDeafultComponent {
  title = 'Pipes';
  number = 0.14;
  dateNow = Date.now();
}

