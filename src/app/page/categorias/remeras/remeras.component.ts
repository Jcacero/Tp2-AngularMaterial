import { Component, OnInit } from '@angular/core';
import { ThumbrailsService } from "../../../servicios/thumbrails.service";
@Component({
  selector: 'app-remeras',
  templateUrl: './remeras.component.html',
  styleUrls: ['./remeras.component.css']
})
export class RemerasComponent implements OnInit {

  equipo:any[] = [];

  constructor(private _servicio:ThumbrailsService) { 
    this.equipo = _servicio.obtenerEquipo();
  }

  ngOnInit(): void {
  }

}
