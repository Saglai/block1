import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from 'src/app/models/posts.model';
import { MainService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit{
  posts$!: Observable<PostModel[]>

  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.posts$ = this.mainService.getPosts();
  }
}
