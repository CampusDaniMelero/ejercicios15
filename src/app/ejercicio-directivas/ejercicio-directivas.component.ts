import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../usuario';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio-directivas',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './ejercicio-directivas.component.html',
  styleUrl: './ejercicio-directivas.component.css'
})
export class EjercicioDirectivasComponent {
  user: Usuario = {
    gender: '',
    nationality: '',
    programmingLanguages: []
  };

  nationalities: string[] = ['Española', 'Americana', 'Alemana', 'Francesa', 'Japonesa'];

  programmingLanguages: string[] = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++'];

  showInformation() {
    console.log('User Information:', this.user);
  }
}