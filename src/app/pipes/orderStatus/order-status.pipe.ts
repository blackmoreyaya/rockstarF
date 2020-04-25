import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderStatus'
})
export class OrderStatusPipe implements PipeTransform {

  transform(status: string, args?: any): any {

    let cadena = '';

    if ( status === '1' ) {
      cadena = '<th class="table-success">Estado de tu pedido: </th>';
      cadena += '<td class="table-success" colspan="2">Entregado </td>';
    }

    if ( status === '2' ) {
      cadena = '<th class="table-warning">Estado de tu pedido: </th>';
      cadena += '<th class="table-warning" colspan="2">En camino </th>';
    }

    if ( status === '3' ) {
      cadena = '<th class="table-danger">Estado de tu pedido: </th>';
      cadena += '<th class="table-danger" colspan="2">Preparación en curso </th>';
    }

    return cadena;

  }

}
