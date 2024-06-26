import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  expression = '';
  result: string = '';

  addToExpression(e: string) {
    this.expression = this.expression + e;
  }

  subtractFromExpression() {
    this.expression = this.expression.slice(0, -1);
  }

  clearExpression() {
    this.expression = '';
  }

  evalExpression() {
    try {
      this.result = eval(this.expression).toString();
    } catch (error) {
      this.result = 'Invalid expression';
    }
  }
}
