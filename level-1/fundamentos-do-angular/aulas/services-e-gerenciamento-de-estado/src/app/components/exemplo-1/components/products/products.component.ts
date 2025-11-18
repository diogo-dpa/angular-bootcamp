import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ProductsCounterComponent } from '../products-counter/products-counter.component';

@Component({
  selector: 'app-products',
  imports: [ProductsListComponent, ProductsCounterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  productsList: any[] = [];
  readonly _productsService = inject(ProductsService);

  ngOnInit() {
    this._productsService.products$.subscribe((products) => {
      console.log(products);
      this.productsList = products;
    });
  }

  criarProduto() {
    this._productsService.addProduct(3, 'Product 3', 300);
  }

  removerProduto() {
    this._productsService.removeProduct(1);
  }

  modificarLista() {
    // Errado
    this.productsList = [];
  }
}
