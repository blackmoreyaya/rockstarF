import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ranking'
})
export class RankingPipe implements PipeTransform {

  transform(rank: number): any {

    if ( !rank || rank === 0 ) {

      return 5;

    } else {

      return rank;

    }

  }

}
