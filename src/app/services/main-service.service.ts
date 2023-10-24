import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.url);
  }
}
