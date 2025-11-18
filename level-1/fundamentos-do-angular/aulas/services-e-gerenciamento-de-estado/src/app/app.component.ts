import { Component } from '@angular/core';
import { ProductsComponent } from './components/exemplo-1/components/products/products.component';
import { ObservablesComponent } from './components/exemplo-2/observables/observables.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, ObservablesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
