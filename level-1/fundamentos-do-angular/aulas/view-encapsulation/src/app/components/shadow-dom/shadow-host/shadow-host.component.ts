import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-shadow-host',
  imports: [ChildComponent],
  template: `
    <p>shadow-host works!</p>
    <app-child tema="primario" tamanho="grande" />
    <app-child tema="secundario" />
    <app-child desabilitado />

    <app-child class="ativo" />
    <div class="tema-escuro">
      <app-child class="ativo" />
    </div>
    <div class="tema-claro">
      <app-child class="ativo" />
    </div>
  `,
  styles: `
    // Define uma variável global para o shadow-host
    :host {
      --shadow-color: blue;
    }

    p {
      color: var(--secondary-color);
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowHostComponent {}
