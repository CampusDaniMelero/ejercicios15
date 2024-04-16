import { Component } from '@angular/core';
import { reservaVuelo } from '../reservaVuelo';
import { Region } from '../region';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ejercicio-vuelos',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf,CommonModule],
  templateUrl: './ejercicio-vuelos.component.html',
  styleUrl: './ejercicio-vuelos.component.css'
})
export class EjercicioVuelosComponent {
  origin: string = 'Madrid';
  destinations: Region[] = [
    { name: 'Norte', destinations: [{ name: 'Bilbao' }, { name: 'Santander' }, { name: 'Oviedo' }] },
    { name: 'Sur', destinations: [{ name: 'Sevilla' }, { name: 'Málaga' }, { name: 'Granada' }] },
    { name: 'Este', destinations: [{ name: 'Barcelona' }, { name: 'Valencia' }, { name: 'Palma de Mallorca' }] }
  ];
  selectedDestinations: string[] = [];
  departureDate: string = '2024-04-12';
  returnDate: string = '2024-04-19';
  numberOfPassengers: number = 6;
  flightReservationInfo: reservaVuelo | null = null; // Variable para almacenar la información de la reserva de vuelo
  showModal: boolean = false; // Flag to control modal visibility

  constructor() { }

  ngOnInit(): void { }

  showInformation() {
    this.flightReservationInfo = {
      origin: this.origin,
      selectedDestinations: this.selectedDestinations,
      departureDate: this.departureDate,
      returnDate: this.returnDate,
      numberOfPassengers: this.numberOfPassengers
    };
    console.log('Reserva de vuelo:', this.flightReservationInfo);

    this.showModal = true; // Show the modal window
  }

  closeModal() {
    this.showModal = false; // Hide the modal window
  }

  }


