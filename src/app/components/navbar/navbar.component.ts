import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarCategorias(){
    this.mostrar=true;
  }
  noMostrarCategorias(){
    this.mostrar=false;
  }
  
}
