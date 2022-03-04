import {NgModule} from "@angular/core";
import {PostCreateComponent} from "./components/post-create/post-create.component";
import {PostListComponent} from "./components/post-list/post-list.component";
import {MaterialModule} from "../material/material.module";
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";


@NgModule({
  declarations : [
    PostCreateComponent,
    PostListComponent
  ],
  exports : [
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    MaterialModule,
    FormsModule,
    CommonModule
  ]
})
export class PostsModule {}
