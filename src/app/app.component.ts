import { Component, DebugNode } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'block1';
  controlCounter = new FormGroup({
    custom: new FormControl(60)
  })
}