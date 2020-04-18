import { Component, OnInit } from '@angular/core';
import { PreviewService } from './preview.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public producto: Product;
  cantidad = 0;

  constructor( public _previewService: PreviewService ) {}

  ngOnInit() {
    this._previewService.notificacion.subscribe( resp => {
      this.producto = resp;
    } );
  }

  cerrarPreview() {

    this._previewService.ocultarPreview();
    this.cantidad = 0;

  }

  cambiarValor( valor: number ) {

    if ( this.cantidad >= this.producto.maxStock && valor > 0 ) {
      this.cantidad = this.producto.maxStock;
      return;
    }

    if (this.cantidad <= 0 && valor < 0) {
      this.cantidad = 0;
      return;
    }

    this.cantidad += valor;

  }


}
