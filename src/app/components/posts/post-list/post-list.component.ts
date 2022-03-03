import { Component, Input } from '@angular/core'
import { Post } from '../posts.model'

@Component({
    selector    : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls   : ['post-list.component.css']
})
export class PostListComponent {
    panelOpenState = false
    @Input() posts : Post[] = []
}

