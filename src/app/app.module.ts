import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { PrimeNGModule } from './material/prime-ng.module';

import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './page/home/home.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BusosComponent } from './page/categorias/busos/busos.component';

//servicios
import { ThumbrailsService } from "./servicios/thumbrails.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    ContactanosComponent,
    FooterComponent,
    BusosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimeNGModule,
    ComponentsModule
  ],
  providers: [
    ThumbrailsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
