import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitan America';
  minombre = 'adRian cAloMarde VarGas';
  lista = [1, 2, 3, 4];
  pi: number = Math.PI;
  pocentaje: number = 0.234;
  salario: number = 1234.5;
  
  heroe = {
    nombre: 'Logan',
    aka: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }

  valorPromesa = new Promise<String>( (resolve) => {
    setTimeout(() => {
      resolve('Llegaron los datos');
    }, 4500);
  } );

  fecha = new Date();
}
