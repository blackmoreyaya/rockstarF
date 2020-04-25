import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

declare var swal: any;

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = [];

  tarjetas: Card[] = [
    {
      numero: '1234 1234 1234 0003',
      nombre: 'Erick Daniel Gonzalez Aguilar',
      tipo: 'Visa',
      vencimiento: '01/2023',
      id: '1'
    },
    {
      numero: '1234 1234 1234 1234',
      nombre: 'Erick Daniel Gonzalez Aguilar',
      tipo: 'Mastercard',
      vencimiento: '01/2023',
      id: '2'
    },
    {
      numero: '1234 1234 1234 4567',
      nombre: 'Erick Daniel Gonzalez Aguilar',
      tipo: 'Visa',
      vencimiento: '01/2023',
      id: '3'
    },
    {
      numero: '1234 1234 1234 5689',
      nombre: 'Erick Daniel Gonzalez Aguilar',
      tipo: 'Mastercard',
      vencimiento: '01/2023',
      id: '4'
    }
  ];

  constructor() { }

  ngOnInit() {
    this.yearsFunctions();
  }

  yearsFunctions () {

    let currentYear = new Date().getFullYear(), years = [];
    let finalYear = 2031;

    while ( currentYear <= finalYear) {
      years.push(currentYear++);
    }

    this.years = years;

  }

  eliminarTarjeta ( tarjeta: Card ) {

    swal({
      title: '¿Estas seguro de eliminar este método de pago?',
      text: 'Estas a punto de borrar la tarjeta con terminacion ' + tarjeta.numero.substr(-4),
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
          console.log('borrar tarjeta');
        }
      });

  }

}
