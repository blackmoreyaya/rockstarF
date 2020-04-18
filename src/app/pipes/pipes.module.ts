import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen/imagen.pipe';
import { RankingPipe } from './ranking/ranking.pipe';
import { DisponibilidadPipe } from './disponibilidad/disponibilidad.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagenPipe,
    RankingPipe,
    DisponibilidadPipe
  ],
  exports: [
    ImagenPipe,
    RankingPipe,
    DisponibilidadPipe
  ]
})
export class PipesModule { }
