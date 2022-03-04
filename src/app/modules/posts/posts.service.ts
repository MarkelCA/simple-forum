import { Injectable } from "@angular/core"
import { Post } from "./posts.model"
import { Subject } from 'rxjs'

@Injectable({providedIn : 'root'})
export class PostService {
    private posts: Post[] = [{
        id : 1,
        title : "Sunt aut facere",
        description : "Repellat provident occaecati excepturi",
        body : "Quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut quas totam nostrum rerum est autem sunt rem eveniet architecto."
    },{
        id : 2,
        title : "Qui est esse",
        description : "Est rerum tempore vitae sequi",
        body : "Sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla."
    }, {
        id : 3,
        title : "Ea molestias quasi exercitationem",
        description : "Rullam et saepe reiciendis voluptatem ad",
        body : "Delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi."
    }]
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
