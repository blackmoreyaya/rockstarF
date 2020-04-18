import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

// import swal from 'sweetalert';
declare var swal: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( public _cartService: CartService ) { }

  ngOnInit() {
  }

  closeCart() {
    this._cartService.closeCart();
  }

  deleteProductCart() {

    swal({
      title: '¿Estas seguro de quitar este producto de tu carrito?',
      text: 'Estas a punto de borrar + nombre de producto',
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

}
