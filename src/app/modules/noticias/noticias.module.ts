import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaNoticiasComponent} from './components/lista-noticias/lista-noticias.component';
import {MaterialModule} from '../material/material.module';
import { TitlePipe } from './pipes/title.pipe';


@NgModule({
  declarations: [
      ListaNoticiasComponent,
      TitlePipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports : [
      ListaNoticiasComponent
  ]
})
export class NoticiasModule { }
