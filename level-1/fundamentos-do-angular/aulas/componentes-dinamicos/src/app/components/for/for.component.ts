import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface IProduct {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-for',
  imports: [CommonModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css',
})
export class ForComponent {
  products: IProduct[] = [
    { id: 1, name: 'Produto 1', price: 100 },
    { id: 2, name: 'Produto 2', price: 200 },
    { id: 3, name: 'Produto 3', price: 300 },
  ];

  updateList() {
    this.products = [
      { id: 1, name: 'Produto 1', price: 100 },
      { id: 2, name: 'Produto 2', price: 200 },
      { id: 3, name: 'Produto 3', price: 300 },
    ];
  }

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
