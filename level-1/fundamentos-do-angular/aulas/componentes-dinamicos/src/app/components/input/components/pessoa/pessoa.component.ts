import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IPessoa } from '../../input.component';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.component.html',
  styleUrl: './pessoa.component.css',
})
export class PessoaComponent implements OnChanges, OnInit {
  @Input({ alias: 'teste' }) pessoa!: IPessoa;
  @Output() removerPessoaEmit = new EventEmitter<number>();

  constructor() {
    // Avoid using logic in the constructor.
    console.log('====== constructor ======');
    console.log('pessoa', this.pessoa);
  }

  ngOnInit(): void {
    // Add logic to initialize the component.
    // 1. API calls
    // 2. Get Input value
    console.log('====== ngOnInit ======');
    console.log('pessoa', this.pessoa);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  removerPessoa(id: number) {
    this.removerPessoaEmit.emit(id);
  }
}
