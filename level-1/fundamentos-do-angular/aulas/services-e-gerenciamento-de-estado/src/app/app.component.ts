import { Component } from '@angular/core';
import { ProductsComponent } from './components/exemplo-1/components/products/products.component';
import { ObservablesComponent } from './components/exemplo-2/observables/observables.component';
import { SubjectComponent } from './components/exemplo-3/subject/subject.component';

@Component({
  selector: 'app-root',
  imports: [ProductsComponent, ObservablesComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
