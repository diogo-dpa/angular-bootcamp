import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [FormsModule],
  templateUrl: './two-way-data-binding.component.html',
  styleUrl: './two-way-data-binding.component.css',
})
export class TwoWayDataBindingComponent {
  texto = 'Texto inicial';

  logarTexto() {
    console.log(this.texto);
  }
}
