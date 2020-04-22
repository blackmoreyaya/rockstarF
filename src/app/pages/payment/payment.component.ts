import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { ExternosService } from 'src/app/services/service.index';
import { Card } from 'src/app/models/card.model';

declare var swal: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: [ './payment.component.css' ]
})
export class PaymentComponent implements OnInit {

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

  direcciones: Address[] = [
    {
      nombre: 'Erick Daniel González Aguilar',
      calle: 'TOTOCUITLAPILCO #112',
      colonia: 'NUEVA SANTAMARIA DE LAS ROSAS',
      municipio: 'TOLUCA',
      ciudad: 'TOLUCA DE LERDO',
      estado: 'MEXICO',
      cp: '50140',
      tel: '7224213955',
      id: '1'
    },
    {
      nombre: 'Ximena González Aguilar',
      calle: 'TOTOCUITLAPILCO #112',
      colonia: 'NUEVA SANTAMARIA DE LAS ROSAS',
      municipio: 'TOLUCA',
      ciudad: 'TOLUCA DE LERDO',
      estado: 'MEXICO',
      cp: '50140',
      tel: '7224213955',
      id: '2'
    }
  ];

  tabActual = 0;

  @ViewChild( 'barra' )  barra: ElementRef;

  showTarjetas = 'oculto';
  addTarjeta = 'oculto';

  constructor( private router: Router,
                public _externoService: ExternosService ) { }

  ngOnInit() {
    this.showTab( this.tabActual );
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

  showTab( n: number ) {

    let elemnts = document.getElementsByClassName('tab');

    let  elem = elemnts[n] as HTMLElement;
    elem.style.display = 'block';

    if (n === 0) {
      document.getElementById('prevBtn').style.display = 'none';
    } else {
      document.getElementById('prevBtn').style.display = 'inline';
    }
    if (n === (elemnts.length - 1)) {
      document.getElementById('nextBtn').innerHTML = 'Confirmar';
      document.getElementById('nextBtn').className = document.getElementById('nextBtn').className.replace('btn btn-outline-warning btn-lg', 'btn btn-warning btn-lg');
    } else {
      document.getElementById('nextBtn').innerHTML = 'Siguiente';
      document.getElementById('nextBtn').className = document.getElementById('nextBtn').className.replace('btn btn-warning btn-lg', 'btn btn-outline-warning btn-lg');
    }

    this.progressBarIndicator( n );

  }

  nextPrev( n: number ) {

    let z = (this.tabActual);
    let x = this.barra.nativeElement.children[0].children[z];
    let imagen = x.querySelectorAll('img')[0];
    imagen.className = imagen.className.replace('box bounce-1', ' ');

    let elemnts = document.getElementsByClassName('tab');
    let elem = elemnts[this.tabActual] as HTMLElement;
    elem.style.display = 'none';

    this.tabActual = this.tabActual + n;

    if ( this.tabActual >= elemnts.length ) {

      document.getElementById('prevBtn').style.display = 'none';
      document.getElementById('nextBtn').style.display = 'none';

      swal({
        title: '!Gracias por tu compra¡',
        text: 'Revisa tus pedidos',
        icon: 'success'
      })
        .then(compra => {

          if (compra) {
            this.router.navigate(['/home']);
            // this._agremiadoService.borrarAgremiado(agremiado._id)
            //   .subscribe(borrado => {
            //     console.log(borrado);
            //     this.cargarAgremiados();
            //   });
            console.log(compra);
          }
        });

      return;

    }

    this.showTab( this.tabActual );

  }

  progressBarIndicator( n: number ) {

    let direccion = this.barra.nativeElement.children[0].children[0];
    let envio = this.barra.nativeElement.children[0].children[1];
    let pago = this.barra.nativeElement.children[0].children[2];
    let confirmacion = this.barra.nativeElement.children[0].children[3];
    let icon1 = direccion.querySelectorAll('.fa')[0];
    let icon2 = envio.querySelectorAll('.fa')[0];
    let icon3 = pago.querySelectorAll('.fa')[0];
    let icon4 = confirmacion.querySelectorAll('.fa')[0];

    let z = (this.tabActual);

    if (z === 0) {
      icon1.className = icon1.className.replace('fa fa-angle-up', 'fa fa-check');
      icon1.style.background = 'red';
      icon1.style.setProperty('--background', 'red');
      icon2.className = icon2.className.replace('fa fa-check', 'fa fa-angle-up');
      icon2.style.background = '#ccc';
      icon2.style.setProperty('--background', '#ccc');
      icon3.className = icon3.className.replace('fa fa-check', 'fa fa-angle-up');
      icon3.style.background = '#ccc';
      icon3.style.setProperty('--background', '#ccc');
      icon4.className = icon4.className.replace('fa fa-check', 'fa fa-angle-up');
      icon4.style.background = '#ccc';
      icon4.style.setProperty('--background', '#ccc');
    }

    if (z === 1) {
      icon1.className = icon1.className.replace('fa fa-angle-up', 'fa fa-check');
      icon1.style.background = 'red';
      icon1.style.setProperty('--background', 'red');
      icon2.className = icon2.className.replace('fa fa-angle-up', 'fa fa-check');
      icon2.style.background = 'red';
      icon2.style.setProperty('--background', 'red');
      icon3.className = icon3.className.replace('fa fa-check', 'fa fa-angle-up');
      icon3.style.background = '#ccc';
      icon3.style.setProperty('--background', '#ccc');
      icon4.className = icon4.className.replace('fa fa-check', 'fa fa-angle-up');
      icon4.style.background = '#ccc';
      icon4.style.setProperty('--background', '#ccc');
    }

    if (z === 2) {
      icon1.className = icon1.className.replace('fa fa-angle-up', 'fa fa-check');
      icon1.style.background = 'red';
      icon1.style.setProperty('--background', 'red');
      icon2.className = icon2.className.replace('fa fa-angle-up', 'fa fa-check');
      icon2.style.background = 'red';
      icon2.style.setProperty('--background', 'red');
      icon3.className = icon3.className.replace('fa fa-angle-up', 'fa fa-check');
      icon3.style.background = 'red';
      icon3.style.setProperty('--background', 'red');
      icon4.className = icon4.className.replace('fa fa-check', 'fa fa-angle-up');
      icon4.style.background = '#ccc';
      icon4.style.setProperty('--background', '#ccc');
    }

    if (z === 3) {
      icon1.className = icon1.className.replace('fa fa-angle-up', 'fa fa-check');
      icon1.style.background = 'red';
      icon1.style.setProperty('--background', 'red');
      icon2.className = icon2.className.replace('fa fa-angle-up', 'fa fa-check');
      icon2.style.background = 'red';
      icon2.style.setProperty('--background', 'red');
      icon3.className = icon3.className.replace('fa fa-angle-up', 'fa fa-check');
      icon3.style.background = 'red';
      icon3.style.setProperty('--background', 'red');
      icon4.className = icon4.className.replace('fa fa-angle-up', 'fa fa-check');
      icon4.style.background = 'red';
      icon4.style.setProperty('--background', 'red');
    }

    let x = this.barra.nativeElement.children[0].children[n];
    let imagen = x.querySelectorAll('img')[0];
    imagen.className += 'box bounce-1';

  }

  selectAddress( id: string ) {

    // tslint:disable-next-line: forin
    for (let i in this.direcciones) {
      document.getElementById(this.direcciones[i].id).className = document.getElementById(this.direcciones[i].id).className.replace('card border-danger mb-3', 'card border-light mb-3');
    }
    document.getElementById(id).className = document.getElementById(id).className.replace('card border-light mb-3', 'card border-danger mb-3');

  }

  findCP( cp: string ) {

    if (cp.length < 5) {
      return;
    }

    if (!/^([0-9])*$/.test(cp)) {
      return;
    }

    this._externoService.obtenerCP( cp ).subscribe( (resp: any) => {
      console.log(resp);
      if (  resp.estado === '' ) {
        console.log('No existe ese cp');
      }
      // this.forma.patchValue({
      //   direccion: {
      //     municipio: resp.municipio,
      //     estado: resp.estado
      //     colonia: resp.colonias
      //   }
      });

  }

  pagoRadio( event: any ) {

    if ( event.target.value === 'credito' ) {

      this.showTarjetas = '';

    } else {

      this.showTarjetas = 'oculto';
      this.addTarjeta = 'oculto';
      this.visaMaster( '0' );

    }

  }

  visaMaster ( id: string ) {

    // tslint:disable-next-line: forin
    for (let i in this.tarjetas) {
      document.getElementById('tarjeta' + (this.tarjetas[i].id)).className = document.getElementById('tarjeta' + (this.tarjetas[i].id)).className.replace('table-warning visaMaster pointer', 'visaMaster pointer');
    }
    if ( id === '0') {
      return;
    }
    document.getElementById('tarjeta' + id).className = document.getElementById('tarjeta' + id).className.replace('visaMaster pointer', 'table-warning visaMaster pointer');
  }

  showAddTarjeta() {

    this.addTarjeta = '';

  }

}
