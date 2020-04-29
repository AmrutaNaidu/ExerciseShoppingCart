import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
    
  `,
  styles: [`
    .product-list, .product-details ul {
      list-style-type: none;
    }
    .product-list li {
      margin: 20px;
      font-weight: bold;
      font-size: 18px;
    }
  `]
})
export class ProductComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  @Input() jsonData = [
    {"id":"0", "name":"Laptop", "url":"./assets/images/laptop.jpeg", "price": "$1500", "description": "This is an amazing Laptop"},
    {"id":"1", "name":"Keyboard", "url":"./assets/images/keyboard.jpeg", "price": "$50", "description": "This is an amazing Keyboard"},
    {"id":"2", "name":"Mouse", "url":"./assets/images/mouse.jpeg", "price": "$20", "description": "This is an amazing Mouse"},
    {"id":"3", "name":"Projector", "url":"./assets/images/projector.jpeg", "price": "$500", "description": "This is an amazing Projector"},
    {"id":"4", "name":"Hard Drive", "url":"./assets/images/harddrive.jpeg", "price": "$100", "description": "This is an amazing Hard Drive"}
  ]
  
}
