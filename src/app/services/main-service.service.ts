import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostsModel } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsModel[]> {
    return this.http.get<PostsModel[]>(this.url);
  }
}
