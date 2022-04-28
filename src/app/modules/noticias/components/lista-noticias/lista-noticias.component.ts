import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { Noticia } from '../../noticias.model';
import {NoticiasService} from '../../noticias.service';

@Component({
  selector: 'lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.css']
})
export class ListaNoticiasComponent implements OnInit {
    noticias : Noticia[]
    private noticiasSub: Subscription

  constructor(public noticiasService : NoticiasService) { }

  ngOnInit(): void {
        this.noticias = this.noticiasService.getNoticias()
        this.noticiasSub = this.noticiasService.getNoticiasUpdateListener().subscribe((noticias: Noticia[]) => {
            this.noticias = noticias
        })
  }

}
