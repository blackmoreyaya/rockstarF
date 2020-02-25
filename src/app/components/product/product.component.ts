import { Component, OnInit, Input } from '@angular/core';
import { PreviewService } from '../preview/preview.service';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  claseCorazon = 'text-muted';
  bandera = false;

  @Input() productos: Product[] = [];

  constructor( public previewService: PreviewService ) { }

  ngOnInit() {
  }

  addWishList( bandera ) {

    if (bandera === false ) {

      this.claseCorazon = 'text-danger';
      this.bandera = true;

    } else {

      this.claseCorazon = 'text-muted';
      this.bandera = false;

    }

  }

  mostrarPreview( producto ) {

    console.log(producto);
    this.previewService.notificacion.emit( producto );
    this.previewService.mostrarPreview();

  }

}
