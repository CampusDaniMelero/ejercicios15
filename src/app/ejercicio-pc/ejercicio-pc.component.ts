import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio-pc',
  standalone: true,
  imports: [FormsModule , NgFor,NgIf],
  templateUrl: './ejercicio-pc.component.html',
  styleUrl: './ejercicio-pc.component.css'
})
export class EjercicioPCComponent {
  ramSize = 'RAM16';
  processorType = 'Corei9N8';
  graphicsCard = '';
  hardDriveType = 'HDD';
  powerSupply = '600';
  toggleInfo = false;

  selectedRAM: string = '';
  selectedProcessor: string = '';
  selectedGraphicsCard: string = '';
  selectedHardDrive: string = '';
  selectedPowerSupply: string = '';
  graphicsCardOptions: any;
  hardDriveTypeOptions: any;
  powerSupplyOptions: any;
  processorOptions: any;
  ramOptions: any;

  constructor() {
    this.selectedRAM = '';
    this.selectedProcessor = '';
    this.selectedGraphicsCard = '';
    this.selectedHardDrive = '';
    this.selectedPowerSupply = '';

    this.ramOptions = [
      { value: 'RAM8', label: '8GB' },
      { value: 'RAM16', label: '16GB' },
      { value: 'RAM32', label: '32GB' },
      { value: 'RAM64', label: '64GB' }
    ];

    this.processorOptions = [
      { value: 'Corei5', label: 'Core i5' },
      { value: 'Corei7', label: 'Core i7' },
      { value: 'Corei9N8', label: 'Core i9 - N8' }
    ];

    this.graphicsCardOptions = [
      { value: 'GTX1050', label: 'NVIDIA GTX 1050' },
      { value: 'RTX2060', label: 'NVIDIA RTX 2060' },
      { value: 'RX580', label: 'AMD Radeon RX 580' }
    ];

    this.hardDriveTypeOptions = [
      { value: 'HDD', label: 'HDD' },
      { value: 'SSD', label: 'SSD' },
      { value: 'SSHD', label: 'SSHD' }
    ];

    this.powerSupplyOptions = [
      { value: '400', label: '400W' },
      { value: '600', label: '600W' },
      { value: '800', label: '800W' }
    ];
  }

  // Update selected value on RAM change
  onRAMChange(event: Event) {
    this.selectedRAM = (event.target as HTMLInputElement).value;
  }

  // Update selected value on processor change
  onProcessorChange(event: Event) {
    this.selectedProcessor = (event.target as HTMLInputElement).value;
  }

  // Update selected value on graphics card change
  onGraphicsCardChange(event: Event) {
    this.selectedGraphicsCard = (event.target as HTMLInputElement).value;
  }

  // Update selected value on hard drive type change
  onHardDriveChange(event: Event) {
    this.selectedHardDrive = (event.target as HTMLInputElement).value;
  }

  // Update selected value on power supply change
  onPowerSupplyChange(event: Event) {
    this.selectedPowerSupply = (event.target as HTMLInputElement).value;
  }

  // Method to toggle the information when the button is clicked
  toggleInformation() {
    this.toggleInfo = !this.toggleInfo; // Invertimos el valor de toggleInfo
  }
}