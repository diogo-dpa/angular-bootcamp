import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [AsyncPipe],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
})
export class ObservablesComponent implements OnInit, OnDestroy {
  meuObservable$!: Observable<number>;
  observableLista$!: Observable<string[]>;
  meuSubscription!: Subscription;

  ngOnInit(): void {
    this.criarObservable();
    // this.inscricao1();
    this.criarObservaleLista();
    // this.incricaoListaMaiuscula();
    this.incricaoNumerosImpares();
  }

  ngOnDestroy(): void {
    this.meuSubscription?.unsubscribe();
  }

  inscricao1() {
    this.meuSubscription = this.meuObservable$.subscribe((valor) => {
      console.log(valor);
    });
  }

  criarObservable() {
    this.meuObservable$ = new Observable<number>((subscriber) => {
      console.log('Observable iniciado');
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);

      setTimeout(() => {
        subscriber.next(4);
      }, 3000);
    });
  }

  criarObservaleLista() {
    this.observableLista$ = new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next(['oi', 'mundo']);
      }, 5000);
    });
  }

  incricaoListaMaiuscula() {
    this.observableLista$
      .pipe(
        map((lista) => {
          return lista.map((nome) => nome.toUpperCase());
        })
      )
      .subscribe((lista) => {
        console.log(`LISTA MAIUSCULA: ${lista}}`);
      });
  }

  incricaoNumerosImpares() {
    this.meuObservable$
      .pipe(
        tap((numero) => {
          console.log({ numero });
        }),
        filter((numero) => numero % 2 !== 0)
      )
      .subscribe((numero) => {
        console.log(`NUMERO IMPAR: ${numero}`);
      });
  }
}
