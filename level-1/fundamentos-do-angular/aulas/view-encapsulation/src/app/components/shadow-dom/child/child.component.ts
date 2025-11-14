import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: ` <p>child works!</p> `,
  styles: `
     p {
      // Acessa a variável global definida no componente pai
      color: var(--shadow-color);
     }

    :host {
      display: block;
      border: 1px solid #ddd;
      margin: 20px;
      padding: 0;
      width: 300px;
      float: left;
    }

    :host(:hover){
      box-shadow: 0 6px 12px rgba(0,0,0,0.15);
      transform: translateY(-2px);
      transition: box-shadow 0.3s ease-in-out;
    }

    /** Variáveis de estado do host */
    :host([tema="primario"]){
      background-color: #007bff;
      color: white;
    }

    :host([tema="secundario"]){
      background-color: #6c757d;
      color: white;
    }

    :host([tamanho="grande"]){
      font-size: 18px;
      padding: 15px 30px;
    }

    :host([desabilitado]){
        opacity: 0.7;
        cursor: not-allowed;
        background-color: #ccc;
    }

    // Estiliza o host quando a classe ativo é aplicada
    :host(.ativo){
      border-color: #007bff;
      box-shadow: 0 0 10px rgba(0,123,255,0.5);
      background-color: #e6f7ff;
    }

    // Estiliza o host E o conteudo interno SE um pai tiver a classe tema-escuro
    :host-context(.tema-escuro){
      border: 1px solid #555;
      color: white;
      background-color: #333;
    }
  `,
})
export class ChildComponent {}
