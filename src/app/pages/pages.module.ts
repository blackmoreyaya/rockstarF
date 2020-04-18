import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// RUTAS
import { PAGES_ROUTING } from './pages.routes';

// PIPES
import { PipesModule } from '../pipes/pipes.module';

// COMPARTIDOS
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { ComponentsModule } from '../components/components.module';

// SLIDERS
import { Ng5SliderModule } from 'ng5-slider';

// PÁGINAS
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { PaymentComponent } from './payment/payment.component';
import { PreviewCartComponent } from './preview-cart/preview-cart.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    DetailComponent,
    ProfileComponent,
    WishListComponent,
    CategoryComponent,
    AccountComponent,
    PaymentComponent,
    PreviewCartComponent
  ],
  exports: [
    PagesComponent
  ],
  imports: [
    PAGES_ROUTING,
    CommonModule,
    SharedModule,
    NgbModule,
    PipesModule,
    ComponentsModule,
    Ng5SliderModule,
    FormsModule
  ]
})
export class PagesModule { }
