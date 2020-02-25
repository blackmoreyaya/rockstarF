import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // agremiados: Agremiado[] = [];
  productos: Product[] = [
                {
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
                },
                {
                  nombre: 'The North Face Unisex, Multi Color',
                  precio: 500.00,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Mochilas'
                  },
                  wishlist: true,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 3
                    },
                  ],
                },
                {
                  nombre: 'Samsung Galaxy Tab Active 2',
                  precio: 258.89,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Celulares'
                  },
                  wishlist: true,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 3
                    },
                  ],
                },
                {
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
                },
                {
                  nombre: 'The North Face Unisex, Multi Color',
                  precio: 500.00,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Mochilas'
                  },
                  wishlist: false,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 3
                    },
                  ],
                },
                {
                  nombre: 'Samsung Galaxy Tab Active 2',
                  precio: 258.89,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Celulares'
                  },
                  wishlist: false,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 3
                    },
                  ],
                },
                {
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
                },
                {
                  nombre: 'The North Face Backpack, Multi Color',
                  precio: 500.00,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Mochilas'
                  },
                  wishlist: true,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/saber.jpg',
                      prioridad: 3
                    },
                  ],
                },
                {
                  nombre: 'Samsung Galaxy Tab Active 2',
                  precio: 258.89,
                  descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias assumenda vero architecto sapiente, cupiditate nostrum nulla deserunt accusantium fuga! Hic tempora unde nulla totam quos quas, et libero nostrum?',
                  categoria: {
                    nombre: 'Celulares'
                  },
                  wishlist: false,
                  imagen: [
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 1
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 2
                    },
                    {
                      nombre: 'http://localhost:4200/assets/img/sf.jpg',
                      prioridad: 3
                    },
                  ],
                }
            ];

  constructor() { }

  ngOnInit() {
    console.log(this.productos);
  }

}
