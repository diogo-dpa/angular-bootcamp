import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css',
})
export class SubjectComponent implements OnInit {
  meuSubject$: Subject<string> = new Subject<string>();
  ngOnInit(): void {
    this.meuSubject$.next('Ninguém vai receber');

    this.primeiraInscricao();
    setTimeout(() => {
      this.meuSubject$.next('Novo valor');
    }, 5000);
  }

  primeiraInscricao() {
    this.meuSubject$.subscribe((valor) => {
      console.log('PRIMEIRA INSCRIÇÃO:', { valor });
    });
  }

  segundaInscricao() {
    this.meuSubject$.subscribe((valor) => {
      console.log('SEGUNDA INSCRIÇÃO:', { valor });
    });
  }
}
