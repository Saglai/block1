import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/posts.model';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  posts!: PostModel[];
  posts2!: PostModel[];
  shouldPostsRender = true;
  employees = [
    {
      name: "Rahul", email: "rahul@gmail.com",
      skills: [{ skill: 'Angular', exp: '2' },{ skill: 'Javascript', exp: '7' },{ skill: 'TypeScript', exp: '3' }
      ]
    },
    {
      name: "Sachin", email: "sachin@gmail.com",
      skills: [{ skill: 'Angular', exp: '1' },{ skill: 'Android', exp: '3' },{ skill: 'React', exp: '2' }
      ]
    },
    {
      name: "Laxmna", email: "laxman@gmail.com",
      skills: [{ skill: 'HTML', exp: '2' },{ skill: 'CSS', exp: '2' },{ skill: 'Javascript', exp: '1' }
      ]
    }
  ]
 
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  trackByFn(index: number, item: PostModel): Number {
    return item.id;
  }

  refresh() {
    this.getPosts();
  }

  getPosts(): void {
    this.mainService.getPosts().
    subscribe(postsArray => {
      this.posts = postsArray;
      this.posts.length = 5;
    })
  }
}
