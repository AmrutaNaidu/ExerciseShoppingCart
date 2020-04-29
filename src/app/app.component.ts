import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>  
  <app-shopping-cart></app-shopping-cart>
  `,
  styles: []
})
export class AppComponent {
  title = 'Welcome Shopping Cart!';
}
