import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThumbrailsService {

  equipo:any [] = [
    {
      nombre:'juan',
      especialidad:'html',
      descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      nombre:'ramiro',
      especialidad:'css',
      descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
      nombre:'mariano',
      especialidad:'java',
      descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }
  ]

  constructor() { 
    console.log('funcionando servicios')
  }

  obtenerEquipo(){
    return this.equipo
  }
}
