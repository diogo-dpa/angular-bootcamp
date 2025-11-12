import { Component } from '@angular/core';

@Component({
  selector: 'app-card-component',
  imports: [],
  template: `
    <div class="card-container">
      <div class="card-header">
        <h3>Card Title</h3>
      </div>
      <div class="card-body">
        <p>Card Content</p>
      </div>
      <div class="card-footer">
        <p>Card Footer</p>
      </div>
    </div>
  `,
  styles: `
    .card-container {
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 10px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      min-height: 100px;
    }

    .card-header {
      background-color: #f0f0f0;
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }

    .card-header h3 {
      margin: 0;
      font-size: 1.2em;
      font-weight: bold;
    }

    .card-body {
      padding: 10px;
      color: #333;
    }

    .card-footer {
      background-color: #f8f8f8;
      padding: 10px;
      border-top: 1px solid #ccc;
    }
  `,
})
export class CardComponentComponent {}
