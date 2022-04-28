import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';


const routes : Routes = [
    {
        path: 'posts',
        loadChildren: () => import('../modules/posts/posts.module').then(m => m.PostsModule)
    },
    {
        path: 'noticias',
        loadChildren: () => import('../modules/noticias/noticias.module').then(m => m.NoticiasModule)
    },
    {
        path: '**',
        redirectTo: 'noticias'
    }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
