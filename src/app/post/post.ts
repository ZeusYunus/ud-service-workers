import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Posts {
  @Input() title: string = '';
  @Input() content: string = '';
}
