import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Módulos
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// RUTAS
import { PAGES_ROUTING } from '../pages/pages.routes';


@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    PAGES_ROUTING
  ]
})
export class SharedModule { }
