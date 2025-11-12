import { Component } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css',
})
export class ProgressBarComponent {
  progresso: number = 0;
  aumentarProgresso() {
    this.progresso = Math.min(this.progresso + 10, 300);
  }
}
