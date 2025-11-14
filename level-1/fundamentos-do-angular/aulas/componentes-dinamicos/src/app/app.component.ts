import { Component } from '@angular/core';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';

@Component({
  selector: 'app-root',
  imports: [IfComponent, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
