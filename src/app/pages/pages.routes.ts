import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';


const ROUTES: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
          { path: 'home', component: HomeComponent },
          { path: 'detail/:id', component: DetailComponent },
          // { path: '**', component: PagesComponent },
          { path: '', pathMatch: 'full', redirectTo: '/home' }
      ]
    },
];

export const PAGES_ROUTING = RouterModule.forRoot(ROUTES);
