import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// RUTAS
import { PAGES_ROUTING } from './pages.routes';

// PIPES
import { PipesModule } from '../pipes/pipes.module';

// COMPONENTS
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './../components/carousel/carousel.component';
import { ProductComponent } from '../components/product/product.component';
import { PreviewComponent } from '../components/preview/preview.component';
import { CartComponent } from '../components/cart/cart.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    CarouselComponent,
    ProductComponent,
    PreviewComponent,
    CartComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    PAGES_ROUTING,
    CommonModule,
    SharedModule,
    NgbModule,
    PipesModule
  ]
})
export class PagesModule { }
