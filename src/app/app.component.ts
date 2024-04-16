import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { EjercicioPCComponent } from './ejercicio-pc/ejercicio-pc.component';
import { EjercicioVuelosComponent } from './ejercicio-vuelos/ejercicio-vuelos.component';
import { EjercicioDirectivasComponent } from './ejercicio-directivas/ejercicio-directivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraComponent, EjercicioPCComponent,EjercicioVuelosComponent,EjercicioDirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicios15';
}
