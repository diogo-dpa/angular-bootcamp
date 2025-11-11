import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css',
})
export class PropertyBindingComponent {
  texto = 'Texto do input';
  typeInput = 'text';
  disabled: boolean | null = false;

  habilitarInput() {
    this.disabled = false;
  }

  desabilitarInput() {
    this.disabled = true;
  }

  logarTexto() {
    console.log(this.texto);
  }

  onInput(event: Event) {
    this.texto = (event.target as HTMLInputElement).value;
  }
}
