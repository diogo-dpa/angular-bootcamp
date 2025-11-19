import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContextService {
  private itemsSubject$ = new BehaviorSubject<any[]>([]);

  items$ = this.itemsSubject$
    .asObservable()
    .pipe(map((itemsList) => structuredClone(itemsList)));

  adicionarItem(item: { nome: string; price: number }) {
    this.itemsSubject$.next([...this.itemsSubject$.value, item]);
  }
}
