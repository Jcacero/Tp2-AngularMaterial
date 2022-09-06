import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busos',
  templateUrl: './busos.component.html',
  styleUrls: ['./busos.component.css']
})
export class BusosComponent implements OnInit {

  public imagenBuzos:string = "../../../../assets/Imagenes/fotosBusoAzul.jpg";
  public imagenRemeras:string = "../../../../assets/Imagenes/fotoRemera.jpg";
  public imagenCamperas:string = "../../../../assets/Imagenes/fotoRompe.jpg";
  constructor() { }

  ngOnInit(): void {
    
  }
  selectImg (linkImg:string,seccion:string) {
    if (seccion=="seccion-buzos") {
      this.imagenBuzos= linkImg;
    }else{
      if (seccion=='seccion-remeras') {
        this.imagenRemeras=linkImg; 
      }else{
        this.imagenCamperas=linkImg;
      }
    }
  }

}
