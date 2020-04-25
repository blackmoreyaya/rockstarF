import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen/imagen.pipe';
import { RankingPipe } from './ranking/ranking.pipe';
import { DisponibilidadPipe } from './disponibilidad/disponibilidad.pipe';
import { CardPipe } from './card/card.pipe';
import { OrderStatusPipe } from './orderStatus/order-status.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagenPipe,
    RankingPipe,
    DisponibilidadPipe,
    CardPipe,
    OrderStatusPipe
  ],
  exports: [
    ImagenPipe,
    RankingPipe,
    DisponibilidadPipe,
    CardPipe,
    OrderStatusPipe
  ]
})
export class PipesModule { }
