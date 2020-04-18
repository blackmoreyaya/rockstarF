import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExternosService {

  constructor( public http: HttpClient ) { }

  obtenerCP( cp: string ) {

    let url = `https://api-sepomex.hckdrk.mx/query/info_cp/${ cp }?type=simplified`;

    return this.http.get(url).pipe(
      map( (resp: any) => resp.response)
    );

  }

}
