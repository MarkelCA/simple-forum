import { Injectable } from "@angular/core"
import { Post } from "./posts.model"
import { Subject } from 'rxjs'
import { HttpClient } from "@angular/common/http"

@Injectable({providedIn : 'root'})
export class PostService {
    private posts: Post[] = []

    private postsUpdated = new Subject<Post[]>()
    private jsonPosts = {}

    constructor(private http : HttpClient) {}

    getPosts() {
        const url = "http://localhost:4000/graphql"
        const testPostRequest = this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        testPostRequest.subscribe(data => {
            this.posts = data
            this.postsUpdated.next(data)
        })
        // We use the spread operator to make a copy of posts instead of passing the reference
        // so it won't be affected on modifications
        return [...this.posts]
    }

    getPostUpdateListener() {
        return this.postsUpdated.asObservable()
    }

    addPost(title: string, description: string, body: string) {
        const lastId : number = this.posts[ this.posts.length - 1]?.id ?? 1
        const post : Post = {id: lastId, title: title, description: description, body: body}
        this.posts.push(post)
        this.postsUpdated.next([...this.posts])
    }

    setPosts(posts: Post[]) {
        this.posts = posts
    }

    deletePost(id : number) {
      const pos = this.posts.findIndex((post) => post.id === id)
      this.posts.splice(pos, 1)
    }

}
