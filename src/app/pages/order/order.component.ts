import { Component, OnInit } from '@angular/core';
import { Order } from './../../models/order.model';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  providers: [NgbAccordionConfig]
})
export class OrderComponent implements OnInit {

  pedidos: Order[] = [
    {
      fecha: '2020-08-30 13:51:19',
      pagoTotal: 2000,
      envio: 'Gratis',
      status: '1',
      productos: [
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
          ranking: 5,
          maxStock: 15,
          pedidoCantidad: 10,
          pedidoPrecio: 2588.99,
          id: '00001'
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
          ranking: 3,
          maxStock: 5,
          pedidoCantidad: 4,
          pedidoPrecio: 2000,
          id: '00002',
        }
      ],
      metodoPago: null,
      paypal: 'Paypal',
      id: '1'
    },
    {
      fecha: '2021-08-30 13:51:19',
      pagoTotal: 3000,
      envio: 'Gratis',
      status: '2',
      productos: [
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
          ranking: 5,
          maxStock: 15,
          pedidoCantidad: 10,
          pedidoPrecio: 2588.99,
          id: '00001'
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
          ranking: 3,
          maxStock: 5,
          pedidoCantidad: 4,
          pedidoPrecio: 2000,
          id: '00002',
        }
      ],
      metodoPago: {
        numero: '1234 1234 1234 0003',
        nombre: 'Erick Daniel Gonzalez Aguilar',
        tipo: 'Visa',
        vencimiento: '01/2023',
        id: '1'
      },
      paypal: null,
      id: '2'
    },
    {
      fecha: '2022-08-30 13:51:19',
      pagoTotal: 4000,
      envio: 'Gratis',
      status: '3',
      productos: [
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
          ranking: 5,
          maxStock: 15,
          pedidoCantidad: 10,
          pedidoPrecio: 2588.99,
          id: '00001'
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
          ranking: 3,
          maxStock: 5,
          pedidoCantidad: 4,
          pedidoPrecio: 2000,
          id: '00002',
        }
      ],
      metodoPago: {
        numero: '1234 1234 1234 0003',
        nombre: 'Erick Daniel Gonzalez Aguilar',
        tipo: 'Visa',
        vencimiento: '01/2023',
        id: '1'
      },
      paypal: null,
      id: '3'
    }
  ];

  primerAbierto = '';

  constructor( configAcc: NgbAccordionConfig ) {
    configAcc.closeOthers = true;
    configAcc.type = 'warning';
  }

  ngOnInit() {

    this.selectFirstId();

  }

  selectFirstId () {
    // tslint:disable-next-line: forin
    for (const i in this.pedidos) {
      if (this.pedidos[i] === this.pedidos[0]) {
        this.primerAbierto = this.pedidos[0].id;
      }
    }
  }

}
