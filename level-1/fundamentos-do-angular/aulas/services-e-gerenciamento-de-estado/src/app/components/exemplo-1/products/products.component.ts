import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  readonly _productsService = inject(ProductsService);

  criarProduto() {
    this._productsService.addProduct(3, 'Product 3', 300);
  }

  removerProduto() {
    this._productsService.removeProduct(1);
  }

  modificarLista() {
    // Errado
    this._productsService.products = [];
  }
}
