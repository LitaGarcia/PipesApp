import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-not-commons',
  templateUrl: './not-commons.component.html',
  styleUrls: ['./not-commons.component.css'],
})
export class NotCommonsComponent {
  persona = {
    nombre: 'lita',
    edad: '28',
    ciudad: 'sevilla',
  };
  nombre: string = 'Manuela';
  genero: string = 'femenino';
  clientes: string[] = ['Maria', 'Juan', 'Ana', 'Roberto'];
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  clientesMapa = {
    '=0': 'no existe ningún cliente',
    '=1': 'existe un cliente',
    other: 'existen # clientes',
  };
  cambiarCliente(): void {
    if (this.nombre === 'Manuela' && this.genero === 'femenino') {
      this.nombre = 'Raúl';
      this.genero = 'masculino';
    } else if (this.nombre === 'Raúl' && this.genero === 'masculino') {
      this.nombre = 'Manuela';
      this.genero = 'femenino';
    }
  }
  borrarCliente(): void {
    this.clientes.pop();
  }
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {setTimeout(()=>{resolve('fin de la promesa, tenemos la data de la promesa')}, 3500)})
}
