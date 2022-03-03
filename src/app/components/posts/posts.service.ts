import { Injectable } from "@angular/core"
import { Post } from "./posts.model"
import { Subject } from 'rxjs'

@Injectable({providedIn : 'root'})
export class PostService {
    private posts: Post[] = []
    private postsUpdated = new Subject<Post[]>()

    getPosts() { 
        // We use the spread operator to make a copy of posts instead of passing the reference
        // so it won't be affected on modifications
        return [...this.posts]
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable()
    }

    addPost(title: string, description: string, body: string) {
        const post : Post = { title: title, description: description, body: body}
        this.posts.push(post)
        this.postsUpdated.next([...this.posts])
    }

    setPosts(posts: Post[]) { 
        this.posts = posts
    }

}
