import { Component } from '@angular/core';
import { Child, Person, Student, food, statusType, yesNoType } from 'src/app/models/custom-types.model';
import { PostModel } from 'src/app/models/posts.model';

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.css']
})
export class UtilityComponent {
  post: Partial<PostModel> = {title: 'New post'};
  student: Required<Student> = {name: 'John', age: 30};
  requestStatus: Readonly<statusType> = 'Started';

  fish: Exclude<food, 'category'> = {type: 'mainDish', price: 15};
  yes: Extract<yesNoType, 'yes'> = 'yes';
  user: NonNullable<null | string> = 'newUser';

  numberPass: ReturnType<typeof getPassword> = 4;
  marks: Record<subjects, number> = {math: 4, history: 5};
  UserGender: Pick<Person, 'gender'> = {gender: 'man'};
  newChild: Omit<Child, 'info'> = {age: 12};
  
}

function getPassword(login: string) {return +login.length};
type subjects = 'math' | 'history'