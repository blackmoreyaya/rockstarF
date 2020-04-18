import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

// PAGES
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CategoryComponent } from './category/category.component';
import { AccountComponent } from './account/account.component';
import { PreviewCartComponent } from './preview-cart/preview-cart.component';
import { PaymentComponent } from './payment/payment.component';



const ROUTES: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
          { path: 'home', component: HomeComponent },
          { path: 'detail/:id', component: DetailComponent },
          { path: 'wish-list', component: WishListComponent },
          { path: 'category/:id', component: CategoryComponent },
          { path: 'account', component: AccountComponent },
          { path: 'profile', component: ProfileComponent },
          { path: 'preview-cart', component: PreviewCartComponent },
          { path: 'payment', component: PaymentComponent },
          // { path: '**', component: PagesComponent },
          { path: '', pathMatch: 'full', redirectTo: '/home' }
      ]
    },
];

export const PAGES_ROUTING = RouterModule.forRoot(ROUTES);
