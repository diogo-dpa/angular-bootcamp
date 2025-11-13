import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  template: ` <p>child works!</p> `,
  styles: `
    p {
      font-family: cursive;
    }
  `,
})
export class ChildComponent {}
