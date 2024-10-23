import { Injectable } from '@angular/core';
import { Educador } from '../interfaces/educador';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {


  listEducador: Educador[] = [
    {position: 1, nombre: 'Yazmin', correo: 'leila1492@gmailcom', estado: true},
    {position: 2, nombre: 'Huerfanita', correo: 'huergabita@gmailcom', estado: true},
    {position: 3, nombre: 'Miryan', correo: 'myrian@gmailcom', estado: true},
    {position: 4, nombre: 'Manuel', correo: 'myrian@gmailcom', estado: true},
    {position: 5, nombre: 'Yulieth', correo: 'myrian@gmailcom', estado: true},
    {position: 6, nombre: 'Cecila', correo: 'myrian@gmailcom', estado: true},
    {position: 7, nombre: 'Robinson', correo: 'myrian@gmailcom', estado: true},
    {position: 8, nombre: 'Leonardo', correo: 'myrian@gmailcom', estado: true},

  ]
  constructor() { }

  //Listar
  getEducador(){
    return this.listEducador.slice();
  }
  //Eliminar
  elminarEducador(index:number){
      this.listEducador.splice(index,1);
  }

}
