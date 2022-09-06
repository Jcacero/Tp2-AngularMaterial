import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PrimeNGModule } from '../material/prime-ng.module';
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
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    NavbarComponent,
    BannerComponent,
    JumbotronComponent,
    CatergoriasComponent,
    CardsComponent,
    FormEmailComponent,
    ShareSheetComponent,
    VideoInicioComponent,
    CarouselComponent
  ],
  exports:[
    NavbarComponent,
    BannerComponent,
    JumbotronComponent,
    CatergoriasComponent,
    CardsComponent,
    FormEmailComponent,
    ShareSheetComponent,
    VideoInicioComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNGModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
