import { Component } from '@angular/core';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent, SwitchComponent, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
