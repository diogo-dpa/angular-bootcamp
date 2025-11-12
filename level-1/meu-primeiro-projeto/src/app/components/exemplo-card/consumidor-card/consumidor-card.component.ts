import { Component } from '@angular/core';
import { CardComponentComponent } from '../card-component/card-component.component';

@Component({
  selector: 'app-consumidor-card',
  imports: [CardComponentComponent],
  template: `
    <div class="tamanho-1">
      <app-card-component></app-card-component>
    </div>
    <div class="tamanho-2">
      <app-card-component></app-card-component>
    </div>
    <div>
      <app-card-component></app-card-component>
    </div>
  `,
  styles: `
    .tamanho-1 {
      max-width: 400px;
      width: 100%;
      margin-bottom: 20px;
    }

    .tamanho-2 {
      max-width: 600px;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 30px;
    }
    
    
  `,
})
export class ConsumidorCardComponent {}
