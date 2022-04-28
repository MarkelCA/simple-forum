import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaNoticiasComponent} from './components/lista-noticias/lista-noticias.component';
import {MaterialModule} from '../material/material.module';
import { TitlePipe } from './pipes/title.pipe';
import { BodyPipe } from './pipes/body.pipe';
import { NoticiasRoutingModule } from './noticias-routing.module';
import {HomeComponent} from './pages/home/home.component';


@NgModule({
  declarations: [
      HomeComponent,
      ListaNoticiasComponent,
      TitlePipe,
      BodyPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NoticiasRoutingModule
  ],
  exports : [
      ListaNoticiasComponent
  ]
})
export class NoticiasModule { }
