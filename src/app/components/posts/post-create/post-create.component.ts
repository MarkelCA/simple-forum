import {Component, EventEmitter, Output} from "@angular/core";
import { Post } from "../posts.model";
import { NgForm } from "@angular/forms";

@Component({
    selector    : 'app-post-create',
    styleUrls   : ['post-create.css'],
    templateUrl : './post-create.component.html'
})
export class PostCreateComponent {
    @Output() onPostCreated = new EventEmitter<Post>()

    onAddPost(form : NgForm) {
        if(form.invalid) return
        const { title, description, body } = form.value
        const post: Post = {
            title       : title, 
            description : description,
            body        : body
        }

        this.onPostCreated.emit(post)
    }

}
