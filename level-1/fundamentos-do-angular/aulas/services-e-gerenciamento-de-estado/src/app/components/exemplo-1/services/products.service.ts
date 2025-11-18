import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = new BehaviorSubject<any[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
    },
  ]);

  readonly products$ = this.products
    .asObservable()
    .pipe(map((products) => structuredClone(products)));

  addProduct(id: number, name: string, price: number) {
    this.products.next([...this.products.getValue(), { id, name, price }]);
  }

  removeProduct(id: number) {
    this.products.next(
      this.products.getValue().filter((product) => product.id !== id)
    );
  }
}
