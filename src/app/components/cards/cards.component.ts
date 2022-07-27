import { Component, OnInit } from '@angular/core';
import { RopaCard } from "src/app/model/ropa-card";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  public info: RopaCard [];

  constructor() {
    this.info=[
      {
        titulo: 'Buzos',
        imagen: '../../../assets/Imagenes/fotosBusoAzul.jpg',
        direc: '/ropa#buzos'
      },
      {
        titulo: 'Remeras',
        imagen: '../../../assets/Imagenes/fotoRemera.jpg',
        direc: '/ropa#remeras'

      },
      {
        titulo: 'Camperas',
        imagen: '../../../assets/Imagenes/fotoRompe.jpg',
        direc: '/ropa#camperas'
      }
    ]
  }

  ngOnInit(): void {
  }

}
