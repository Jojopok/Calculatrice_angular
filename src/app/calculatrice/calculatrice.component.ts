import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  numberOne: number = 0;
  numberTwo: number = 0;
  result: number =0;

  randomNumbers() {
    return Math.floor(Math.random() * 100); // Floor pour arrond et random pour un chiffre aléatoire
  }

  calculate(operation: string) {
    if (this.numberOne !== 0 && this.numberTwo !== 0) {
      switch(operation) {
        case '+':
          this.result = this.numberOne + this.numberTwo;
          break;
        case '-':
          this.result = this.numberOne - this.numberTwo;
          break;
        case '*':
          this.result = this.numberOne * this.numberTwo;
          break;
        case '/':
          this.result = this.numberOne / this.numberTwo;
          break;
        default:
          this.result = 0;
      }
    }
  }
}