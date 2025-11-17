import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TratandoImagensComponent } from './components/tratando-imagens/tratando-imagens.component';
import { TratandoSvgComponent } from './components/tratando-svg/tratando-svg.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TratandoSvgComponent, TratandoImagensComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tratando-assets';
}
