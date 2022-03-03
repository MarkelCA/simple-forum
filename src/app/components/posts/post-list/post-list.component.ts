import { Component, Input } from '@angular/core'

@Component({
    selector    : 'app-post-list',
    templateUrl : 'post-list.component.html',
    styleUrls   : ['post-list.component.css']
})
export class PostListComponent {
    panelOpenState = false
    @Input() posts = []
    posts_default = [
        {title: 'First Post', content:'Dolor enim deserunt itaque nostrum voluptas Aperiam consequatur maxime nihil debitis ex! Necessitatibus inventore quae nostrum veritatis doloribus? Ratione nobis repudiandae odio ducimus corporis Itaque iure ea non reiciendis numquam?'},
        {title: 'Second Post', description:'This is my description', content:'Dolor enim deserunt itaque nostrum voluptas Aperiam consequatur maxime nihil debitis ex! Necessitatibus inventore quae nostrum veritatis doloribus? Ratione nobis repudiandae odio ducimus corporis Itaque iure ea non reiciendis numquam?'},
        {title: 'Third Post', content:'Dolor enim deserunt itaque nostrum voluptas Aperiam consequatur maxime nihil debitis ex! Necessitatibus inventore quae nostrum veritatis doloribus? Ratione nobis repudiandae odio ducimus corporis Itaque iure ea non reiciendis numquam?'},
    ]
    
}

