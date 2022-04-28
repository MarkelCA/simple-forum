import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaNoticiasComponent} from '../modules/noticias/components/lista-noticias/lista-noticias.component';
import {HomeComponent} from '../pages/home/home.component';


const routes : Routes = [
    {
        path: 'listado',
        component: ListaNoticiasComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: 'home'
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
