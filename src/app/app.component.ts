import { Component, DebugNode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'block1';
}

const log = (constructor: Function) => {
  console.log(constructor.prototype);
}

@log
class User {

  private name: string;
  constructor(name: string){
      this.name = name;
  }
 
  setName(name: string, age: number){
      this.name = name;
  }
  print():void{
      console.log(this.name);
  }
}
let tom = new User("Tom");
tom.setName("Bob", 12);
tom.setName("Sam", 13);