import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  imports: [],
  templateUrl: './behavior-subject.component.html',
  styleUrl: './behavior-subject.component.css',
})
export class BehaviorSubjectComponent implements OnInit {
  meuBehaviorSubject = new BehaviorSubject<string>('Valor inicial');

  ngOnInit(): void {
    this.primeiraInscricao();
  }

  primeiraInscricao() {
    this.meuBehaviorSubject.subscribe((valor) => {
      console.log('PRIMEIRA INSCRIÇÃO:', { valor });
    });
  }

  emitirValor() {
    this.meuBehaviorSubject.next('Novo valor');
  }

  segundaInscricao() {
    this.meuBehaviorSubject.subscribe((valor) => {
      console.log('SEGUNDA INSCRIÇÃO:', { valor });
    });
  }
}
