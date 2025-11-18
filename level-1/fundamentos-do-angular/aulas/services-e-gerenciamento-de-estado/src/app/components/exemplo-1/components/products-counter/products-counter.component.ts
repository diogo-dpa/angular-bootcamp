import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-counter',
  imports: [],
  templateUrl: './products-counter.component.html',
  styleUrl: './products-counter.component.css',
})
export class ProductsCounterComponent {
  readonly _productsService = inject(ProductsService);
}
