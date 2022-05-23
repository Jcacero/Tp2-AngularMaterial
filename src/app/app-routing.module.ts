import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BuzosComponent } from "./page/buzos/buzos.component";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'buzos', component:BuzosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
