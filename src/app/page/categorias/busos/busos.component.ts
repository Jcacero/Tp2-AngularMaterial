import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busos',
  templateUrl: './busos.component.html',
  styleUrls: ['./busos.component.css']
})
export class BusosComponent implements OnInit {

  public imagenPrincipal:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  selectImg () {
    this.imagenPrincipal= '../../../../assets/Imagenes/fotoBusoBlanco.jpg';
  }

}
