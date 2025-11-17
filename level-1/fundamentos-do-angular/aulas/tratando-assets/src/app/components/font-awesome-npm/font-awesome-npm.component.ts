import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-font-awesome-npm',
  imports: [FontAwesomeModule],
  templateUrl: './font-awesome-npm.component.html',
  styleUrl: './font-awesome-npm.component.css',
})
export class FontAwesomeNpmComponent {
  faCoffee = faCoffee;
  faBell = faBell;
}
