import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busos',
  templateUrl: './busos.component.html',
  styleUrls: ['./busos.component.css']
})
export class BusosComponent implements OnInit {

  public imagenPrincipal:string = "../../../../assets/Imagenes/fotosBusoAzul.jpg";


  constructor() { }

  ngOnInit(): void {

  }

  selectImg (linkImg:string) {
    this.imagenPrincipal= linkImg;
  }

}
