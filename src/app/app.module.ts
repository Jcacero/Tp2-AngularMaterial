import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { BuzosComponent } from './page/categorias/buzos/buzos.component';
import { RemerasComponent } from "./page/categorias/remeras/remeras.component";
import { CamperasComponent } from "./page/categorias/camperas/camperas.component";
import { HomeComponent } from './page/home/home.component';
import { NosotrosComponent } from './page/nosotros/nosotros.component';
import { ContactanosComponent } from './page/contactanos/contactanos.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BuzosComponent,
    RemerasComponent,
    CamperasComponent,
    HomeComponent,
    NosotrosComponent,
    ContactanosComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
