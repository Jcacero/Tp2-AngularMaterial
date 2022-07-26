import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

//importacion de componentes
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { CatergoriasComponent } from './catergorias/catergorias.component';
import { CardsComponent } from './cards/cards.component';
import { FormEmailComponent } from './form-email/form-email.component';
import { ShareSheetComponent } from './share-sheet/share-sheet.component';
import { VideoInicioComponent } from './video-inicio/video-inicio.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    JumbotronComponent,
    CatergoriasComponent,
    CardsComponent,
    FormEmailComponent,
    ShareSheetComponent,
    VideoInicioComponent
  ],
  exports:[
    NavbarComponent,
    BannerComponent,
    JumbotronComponent,
    CatergoriasComponent,
    CardsComponent,
    FormEmailComponent,
    ShareSheetComponent,
    VideoInicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
