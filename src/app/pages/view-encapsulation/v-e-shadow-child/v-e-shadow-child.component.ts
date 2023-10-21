import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-v-e-shadow-child',
  templateUrl: './v-e-shadow-child.component.html',
  styleUrls: ['./v-e-shadow-child.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class VEShadowChildComponent {

}
