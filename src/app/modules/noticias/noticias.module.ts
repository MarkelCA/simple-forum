import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListaNoticiasComponent} from './components/lista-noticias.component';


@NgModule({
  declarations: [
      ListaNoticiasComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
      ListaNoticiasComponent
  ]
})
export class NoticiasModule { }
