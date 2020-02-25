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

  constructor( public previewService: PreviewService ) {}

  ngOnInit() {
    this.previewService.notificacion.subscribe( resp => {
      this.producto = resp;
      console.log(this.producto);
    } );
  }

  // ngAfterContentInit() {
  //   this.producto = this.previewService.;
  //   console.log(this.producto);
  // }

  cerrarPreview() {

    this.previewService.ocultarPreview();

  }


}
