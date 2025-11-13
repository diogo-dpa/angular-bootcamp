import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  template: ` <p>user-details works!</p> `,
  styles: `
  p {
    font-family: cursive;
  }`,
  encapsulation: ViewEncapsulation.None,
})
export class UserDetailsComponent {}
