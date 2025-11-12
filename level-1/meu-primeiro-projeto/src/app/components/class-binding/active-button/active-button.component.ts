import { Component } from '@angular/core';

@Component({
  selector: 'app-active-button',
  imports: [],
  template: `
    <button [class.active]="isActive" (click)="toggleActive()">
      {{ isActive ? 'Ativo' : 'Inativo' }}
    </button>
  `,
  styles: `
    button {
      padding: 10px 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
    }
    .active {
      background-color: #007bff;
      color: #fff;
      border-color: #007bff;
    }
  `,
})
export class ActiveButtonComponent {
  isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
