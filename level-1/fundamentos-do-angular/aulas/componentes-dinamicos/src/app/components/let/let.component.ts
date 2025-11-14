import { Component } from '@angular/core';

@Component({
  selector: 'app-let',
  imports: [],
  templateUrl: './let.component.html',
  styleUrl: './let.component.css',
})
export class LetComponent {
  pessoas = [
    {
      id: 1,
      nome: 'João',
      idade: 20,
      endereco: { rua: 'Rua das Flores', numero: 123 },
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 25,
    },
  ];

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }

  removerItem() {
    this.pessoas.pop();
  }
}
