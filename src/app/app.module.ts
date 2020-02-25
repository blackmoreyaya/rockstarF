import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';

// Servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
