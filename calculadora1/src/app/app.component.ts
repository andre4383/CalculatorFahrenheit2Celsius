import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class AppComponent {
  TemperaturaF: number = 0;
  TemperaturaC: number = 0;
  mensagem: string = '';


  calcular() {
    const celsius = (this.TemperaturaF - 32) * 5 / 9;
    this.mensagem = `A temperatura em Celsius é: ${celsius.toFixed(0)}ºC`;
  }

}
