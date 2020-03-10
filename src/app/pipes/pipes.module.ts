import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen/imagen.pipe';
import { RankingPipe } from './ranking/ranking.pipe';

@NgModule({
  imports: [],
  declarations: [
    ImagenPipe,
    RankingPipe
  ],
  exports: [
    ImagenPipe,
    RankingPipe
  ]
})
export class PipesModule { }
