import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import {PostService} from "../../posts.service";

@Component({
    selector    : 'app-post-create',
    styleUrls   : ['post-create.css'],
    templateUrl : './post-create.component.html'
})
export class PostCreateComponent {

    constructor(public postService : PostService) {}

    onAddPost(form : NgForm) {
        if(form.invalid) return
        const { title, description, body } = form.value
        this.postService.addPost(title, description, body)
        form.resetForm()
    }

}
