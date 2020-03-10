import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class PreviewService {

  // public producto: Product;

  public notificacion = new EventEmitter<any>();

  public oculto = 'oculto';

  constructor() { }

  ocultarPreview() {

    this.oculto = 'oculto';
    // this.notificacion = null;

  }

  mostrarPreview() {

    this.oculto = '';
    // console.log(this.notificacion);

  }

}
