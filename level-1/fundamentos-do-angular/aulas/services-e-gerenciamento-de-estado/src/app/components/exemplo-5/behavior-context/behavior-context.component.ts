import { Component, inject, OnInit } from '@angular/core';
import { ContextService } from '../context.service';

@Component({
  selector: 'app-behavior-context',
  imports: [],
  templateUrl: './behavior-context.component.html',
  styleUrl: './behavior-context.component.css',
})
export class BehaviorContextComponent implements OnInit {
  private readonly _contextService = inject(ContextService);

  ngOnInit(): void {
    const teste = this._contextService.items$.subscribe((items) => {
      console.log('ITEMS:', items);
    });

    this._contextService.adicionarItem({ nome: 'Item 1', price: 10 });
  }
}
