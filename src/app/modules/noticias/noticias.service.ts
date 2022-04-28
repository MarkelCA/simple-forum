import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Noticia} from './noticias.model';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

    private noticias : Noticia[] = []
    constructor(private http : HttpClient) {}

    private noticiasUpdated = new Subject<Noticia[]>()

    getNoticias() {
        const testPostRequest = this.http.get<Noticia[]>("http://elhuyar.desarrollo.com/eu/api/noticias?_format=json")
        testPostRequest.subscribe(data => {
            this.noticias = data
            console.table(data)
            this.noticiasUpdated.next(data)
        })
        // We use the spread operator to make a copy of posts instead of passing the reference
        // so it won't be affected on modifications
        return [...this.noticias]
    }


    getNoticiasUpdateListener() {
        return this.noticiasUpdated.asObservable()
    }

}
