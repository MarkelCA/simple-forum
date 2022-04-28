import { Pipe, PipeTransform } from '@angular/core';
import {Noticia} from '../noticias.model';

@Pipe({
  name: 'body'
})
export class BodyPipe implements PipeTransform {

  transform(noticia: Noticia): string {
    return noticia?.body[0]?.value;
  }

}
