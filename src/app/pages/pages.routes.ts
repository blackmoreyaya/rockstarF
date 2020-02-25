import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


const ROUTES: Routes = [
    {
      path: '',
      component: PagesComponent,
      children: [
          { path: 'home', component: HomeComponent },
          // { path: '**', component: PagesComponent },
          { path: '', pathMatch: 'full', redirectTo: '/home' }
      ]
    },
];

export const PAGES_ROUTING = RouterModule.forRoot(ROUTES);
