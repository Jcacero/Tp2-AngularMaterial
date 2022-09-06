import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TabViewModule} from 'primeng/tabview';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TabViewModule,
    CarouselModule,
    ButtonModule
  ],
  exports:[
    TabViewModule,
    CarouselModule,
    ButtonModule
  ]
})
export class PrimeNGModule { }
