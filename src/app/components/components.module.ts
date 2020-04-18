import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// PIPES
import { PipesModule } from '../pipes/pipes.module';

// ROUTES
import { PAGES_ROUTING } from '../pages/pages.routes';

// COMPONENTS
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { PreviewComponent } from './preview/preview.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ResetPassComponent } from './reset-pass/reset-pass.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductComponent,
    PreviewComponent,
    CartComponent,
    LoginComponent,
    CreateAccountComponent,
    ResetPassComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PipesModule,
    PAGES_ROUTING
  ],
  exports: [
    CarouselComponent,
    ProductComponent,
    PreviewComponent,
    CartComponent,
    LoginComponent,
    CreateAccountComponent,
    ResetPassComponent
  ]
})
export class ComponentsModule { }
