import { Component } from '@angular/core';
import { Loan } from '../loan';
import { ConventionalLoan } from '../conventionalLoan';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  pagosCalculados = false;
  resultadoPagoInteres: string = '';
  resultadoPagoConvencional: string = '';
 
  constructor() { }
 
  calcularPagos(): void {
      let loanTerms: Loan = { principal: 30000, interestRate: 5 };
      let conventionalLoanTerms: ConventionalLoan = { principal: 30000, interestRate: 5, months: 180 };
 
      this.resultadoPagoInteres = this.calcularPagoPrestamoInteres(loanTerms);
      this.resultadoPagoConvencional = this.calcularPagoPrestamoConvencional(conventionalLoanTerms);
 
      this.pagosCalculados = true;
  }
 
  calcularPagoPrestamoInteres(terminosPrestamo: Loan): string {
      let interes = terminosPrestamo.interestRate / 1200;
      let pago = terminosPrestamo.principal * interes;
      return 'El pago del préstamo de interés solamente es de ' + pago.toFixed(2);
  }
 
  calcularPagoPrestamoConvencional(terminosPrestamo: ConventionalLoan): string {
      let interes = terminosPrestamo.interestRate / 1200;
      let pago = terminosPrestamo.principal * interes / (1 - (Math.pow(1 / (1 + interes), terminosPrestamo.months)));
      return 'El pago del préstamo convencional es de ' + pago.toFixed(2);
  }
}