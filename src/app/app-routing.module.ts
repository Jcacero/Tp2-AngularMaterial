import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { RemerasComponent } from "./page/categorias/remeras/remeras.component";
import { CamperasComponent } from "./page/categorias/camperas/camperas.component";
import { NosotrosComponent } from "./page/nosotros/nosotros.component";
import { ContactanosComponent } from "./page/contactanos/contactanos.component";
import { BusosComponent } from './page/categorias/busos/busos.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'remeras', component:RemerasComponent},
  {path:'camperas', component:CamperasComponent},
  {path:'busos', component:BusosComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactanos', component:ContactanosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
