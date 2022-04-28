import {NgModule} from "@angular/core";
import {PostCreateComponent} from "./components/post-create/post-create.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {MaterialModule} from "../material/material.module";
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { PostsRoutingModule } from './posts-routing.module';


@NgModule({
  declarations : [
    PostCreateComponent,
    PostListComponent,
    HomeComponent
  ],
  exports : [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    PostsRoutingModule
  ]
})
export class PostsModule {}
