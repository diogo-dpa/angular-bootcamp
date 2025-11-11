import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  onButtonClick() {
    console.log('Botão clicado');
  }

  onInput(event: Event) {
    console.log(event);
    const target = (event.target as HTMLInputElement).value;
  }

  onBlur(event: Event) {
    console.log(event);
    const target = (event.target as HTMLInputElement).value;
  }

  onFocus(event: Event) {
    console.log(event);
    const target = (event.target as HTMLInputElement).value;
  }
}
