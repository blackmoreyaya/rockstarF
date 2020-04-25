import { Component, OnInit } from '@angular/core';
import { ExternosService } from 'src/app/services/service.index';
import { Address } from './../../models/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

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
      id: '3'
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
      id: '4'
    }
  ];

  constructor( public _externoService: ExternosService ) { }

  ngOnInit() {
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

}
