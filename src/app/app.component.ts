import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'tree',
      imageUrl: 'assets/images/tree.jpeg',
      username: 'nature',
      content: 'i saw neat tree'
    },
    {
      title: 'mountain',
      imageUrl: 'assets/images/mountain.jpeg',
      username: 'mountain',
      content: 'i saw neat mountain'
    },
    {
      title: 'biking',
      imageUrl: 'assets/images/biking.jpeg',
      username: 'biking',
      content: 'i saw biking'
    },
  ]

  getPosts() {
    return this.posts;
  }
}
