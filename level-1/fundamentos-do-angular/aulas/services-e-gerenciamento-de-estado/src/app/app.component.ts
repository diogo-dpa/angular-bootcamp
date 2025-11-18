import { Component } from '@angular/core';
import { ProductsComponent } from './components/exemplo-1/components/products/products.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
