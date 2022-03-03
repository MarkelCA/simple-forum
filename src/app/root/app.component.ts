import { Component } from '@angular/core';
import { Post } from '../components/posts/posts.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-course';
  storedPosts: Post[] = []

  onPostAdded(post : Post) {
      this.storedPosts.push(post) }
}
