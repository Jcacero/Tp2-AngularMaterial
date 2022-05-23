import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { BuzosComponent } from './page/buzos/buzos.component';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuzosComponent,
    HomeComponent,
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
