import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { PreviewService } from '../components/preview/preview.service';
import { CartService } from '../components/cart/cart.service';

import {
  ExternosService
} from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    PreviewService,
    CartService,
    ExternosService
  ]
})
export class ServiceModule { }
