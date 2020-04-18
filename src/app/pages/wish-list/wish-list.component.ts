import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

declare var swal: any;

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

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
      ranking: 5,
      maxStock: 15,
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
      maxStock: 0,
      id: '00002',
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
      maxStock: 10,
      id: '00003',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  deleteProductWish( producto: Product ) {

    swal({
      title: '¿Estas seguro de quitar este producto de tu lista de deseos?',
      text: 'Estas a punto de borrar ' + producto.nombre,
      icon: 'warning',
      buttons: ['Cancelar', 'Aceptar'],
      dangerMode: true
    })
      .then(borrar => {
        // console.log(borrar);
        if (borrar) {
          // this._agremiadoService.borrarAgremiado(agremiado._id)
          //   .subscribe(borrado => {
          //     console.log(borrado);
          //     this.cargarAgremiados();
          //   });
          console.log('borrar producto del carrito');
        }
      });

  }

  mostrarBoton( maxStock: number ) {

    if ( maxStock === 0 ) {
      return true;
    }
    // } else {
    //   this.disabled = false;
    // }

  }

}
