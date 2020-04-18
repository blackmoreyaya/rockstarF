import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disponibilidad'
})
export class DisponibilidadPipe implements PipeTransform {

  transform( maxStock: number, args?: any): any {

    if ( maxStock === 0) {
      return `<p class="text-danger">No disponible</p>`;
    } else {
      return `<p class="text-success">Disponible</p>`;
    }

  }

}
