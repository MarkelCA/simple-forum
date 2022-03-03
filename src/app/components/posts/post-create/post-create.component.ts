import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector    : 'app-post-create',
    styleUrls   : ['post-create.css'],
    templateUrl : './post-create.component.html'
})
export class PostCreateComponent {
    title = ''
    body = ''
    description = ''

    @Output() onPostCreated = new EventEmitter()

    onAddPost() {
        const post = {
            title       : this.title, 
            description : this.description,
            body        : this.body
        }

        this.onPostCreated.emit(post)
    }

}
