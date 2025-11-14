import { Component } from '@angular/core';
import { PessoaComponent } from './components/pessoa/pessoa.component';

export interface IPessoa {
  id: number;
  nome: string;
  idade: number;
  endereco?: { rua: string; numero: number };
}

@Component({
  selector: 'app-input',
  imports: [PessoaComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  pessoas: IPessoa[] = [
    {
      id: 1,
      nome: 'João',
      idade: 20,
      endereco: { rua: 'Rua das Flores', numero: 123 },
    },
    // {
    //   id: 2,
    //   nome: 'Maria',
    //   idade: 25,
    // },
  ];

  pegarQuantidadePessoas() {
    return this.pessoas.length;
  }

  removerItem() {
    this.pessoas.pop();
  }

  removerPessoa(id: number) {
    this.pessoas = this.pessoas.filter((pessoa) => pessoa.id !== id);
  }

  mudarNome() {
    // In order to trigger the ngOnChanges, it needs to pass a new object reference, otherwise the component will not be updated.
    this.pessoas[0] = {
      ...this.pessoas[0],
      nome: 'João da Silva',
    };
  }
}
