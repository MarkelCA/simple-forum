import {Component, EventEmitter, Output} from "@angular/core";
import { Post } from "../posts.model";

@Component({
    selector    : 'app-post-create',
    styleUrls   : ['post-create.css'],
    templateUrl : './post-create.component.html'
})
export class PostCreateComponent {
    title = ''
    body = ''
    description = ''

    @Output() onPostCreated = new EventEmitter<Post>()

    onAddPost() {
        const post: Post = {
            title       : this.title, 
            description : this.description,
            body        : this.body
        }

        this.onPostCreated.emit(post)
    }

}
