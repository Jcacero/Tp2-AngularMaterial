import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from "./page/home/home.component";
import { NosotrosComponent } from "./page/nosotros/nosotros.component";
import { ContactanosComponent } from "./page/contactanos/contactanos.component";
import { BusosComponent } from './page/categorias/busos/busos.component';


const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:'inicio', component:HomeComponent},
  {path:'ropa', component:BusosComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'contactanos', component:ContactanosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
