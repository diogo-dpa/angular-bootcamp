import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TratandoImagensComponent } from './components/tratando-imagens/tratando-imagens.component';
import { TratandoSvgComponent } from './components/tratando-svg/tratando-svg.component';
import { FontAwesomeCdnComponent } from './components/font-awesome-cdn/font-awesome-cdn.component';
import { FontAwesomeNpmComponent } from './components/font-awesome-npm/font-awesome-npm.component';
import { FontesPropriasComponent } from './components/fontes-proprias/fontes-proprias.component';
import { GoogleFontesComponent } from './components/google-fontes/google-fontes.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TratandoSvgComponent,
    TratandoImagensComponent,
    FontAwesomeCdnComponent,
    FontAwesomeNpmComponent,
    FontesPropriasComponent,
    GoogleFontesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tratando-assets';
}
