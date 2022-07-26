import { Component, OnInit } from '@angular/core';
import { ThumbrailsService } from "../../../servicios/thumbrails.service";
@Component({
  selector: 'app-remeras',
  templateUrl: './remeras.component.html',
  styleUrls: ['./remeras.component.css']
})
export class RemerasComponent implements OnInit {

  public imagenPrincipal:string = "../../../../assets/Imagenes/fotosBusoAzul.jpg";

  thumbtails:any[] = [
    {
      imagenT:'../../../../assets/Imagenes/fotoRemera.jpg'
    },
    {
      imagenT:'../../../../assets/Imagenes/fotoRemera2.jpg'
    },
    {
      imagenT:'../../../../assets/Imagenes/fotoRemera3.jpg'
    },
    {
      imagenT:'../../../../assets/Imagenes/fotoRemera4.jpg'
    }

  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

  selectImg (linkImg:string) {
    this.imagenPrincipal= linkImg;
  }

}
