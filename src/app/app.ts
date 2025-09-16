import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Posts } from './post/post';

@Component({
  selector: 'app-root',
  imports: [Posts, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts));
  }
}
