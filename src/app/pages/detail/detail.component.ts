import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  producto: Product = {
    nombre: 'Vans Sk8-Hi MTE Shoes',
    precio: 258.89,
    descripcion: 'The Vans All-Weather MTE Collection features footwear and apparel designed to withstand the elements whilst still looking cool.',
    categoria: {
      nombre: 'Zapatería'
    },
    wishlist: false,
    imagen: [
      {
        nombre: 'http://localhost:4200/assets/img/baiken.jpg',
        prioridad: 1
      },
      {
        nombre: 'http://localhost:4200/assets/img/baiken.jpg',
        prioridad: 2
      },
      {
        nombre: 'http://localhost:4200/assets/img/baiken.jpg',
        prioridad: 3
      },
    ],
    ranking: 5,
    maxStock: 10,
    id: '00001',
  };

  cantidad = 0;
  rankClientes = 3;

  currentJustify = 'justified';

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {

    if ( this.cantidad >= this.producto.maxStock && valor > 0 ) {
      this.cantidad = this.producto.maxStock;
      return;
    }

    if ( this.cantidad <= 0 && valor < 0 ) {
      this.cantidad = 0;
      return;
    }

    this.cantidad += valor;

  }
}
