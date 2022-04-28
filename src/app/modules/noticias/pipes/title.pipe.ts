import { Pipe, PipeTransform } from '@angular/core';
import {Noticia} from '../noticias.model';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(noticia: Noticia): string {
    return noticia.title[0].value;
  }

}
