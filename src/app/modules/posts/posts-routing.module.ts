import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {PostListComponent} from './components/post-list/post-list.component';


const routes : Routes = [
    {
        path: '',
        component: HomeComponent,
        children : [
            {
                path: 'listado',
                component: PostListComponent
            },
        ]
    },
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes),
      CommonModule
  ]
})
export class PostsRoutingModule { }
