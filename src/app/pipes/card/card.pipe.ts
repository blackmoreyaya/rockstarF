import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform( tipo: string ): any {

    tipo = tipo.toUpperCase();

    if ( tipo === 'MASTERCARD') {

      return '../../../assets/img/mastercard.png';

    }

    if ( tipo === 'VISA' ) {

      return '../../../assets/img/visa.png';

    }

  }

}
