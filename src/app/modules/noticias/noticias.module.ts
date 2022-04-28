import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaNoticiasComponent} from './components/lista-noticias/lista-noticias.component';
import {MaterialModule} from '../material/material.module';


@NgModule({
  declarations: [
      ListaNoticiasComponent
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
