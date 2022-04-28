import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListaNoticiasComponent} from './components/lista-noticias/lista-noticias.component';
import {HomeComponent} from 'src/app/modules/noticias/pages/home/home.component';

const routes : Routes = [
    {
        path: '',
        component: HomeComponent,
        children : [
            {
                path: 'listado',
                component: ListaNoticiasComponent
            },
            {
                path: '**',
                redirectTo: 'listado'
            }
        ]
    },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NoticiasRoutingModule { }
