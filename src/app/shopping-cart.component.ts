import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: 'shopping-cart.component.html',
  styleUrls: ['shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
   let purchased = localStorage.getItem("Purchased");
   if(purchased && purchased.length != 0) {
     this.purchased = JSON.parse(purchased)
   } else {
     this.purchased = [];
   }
  }

  products: any = [
    {"name":"", "url":"", "price": "", "description": "", qty: 1},
    {"name":"Laptop", "url":"./assets/images/laptop.jpeg", "price": "$1500", "description": "This is an amazing Laptop", qty: 1},
    {"name":"Keyboard", "url":"./assets/images/keyboard.jpeg", "price": "$50", "description": "This is an amazing Keyboard", qty: 1},
    {"name":"Mouse", "url":"./assets/images/mouse.jpeg", "price": "$20", "description": "This is an amazing Mouse", qty: 1},
    {"name":"Projector", "url":"./assets/images/projector.jpeg", "price": "$500", "description": "This is an amazing Projector", qty: 1},
    {"name":"Hard Drive", "url":"./assets/images/harddrive.jpeg", "price": "$100", "description": "This is an amazing Hard Drive", qty: 1}
  ]
  purchased: any = []
  productId: number = 0;
  count: number = 1;
  productQty: number = 1;
  flag: boolean = false;
  
  onClick(id): void {
    console.log('in onclick! '+id);
    this.productId = id;
    console.log('productId '+this.productId)
    this.flag = !this.flag;
  }

  onChange() {
    console.log("in change!");
    this.productQty = this.products[this.productId].qty; 
    console.log(this.productQty);
  } 

  onPurchase() {
    console.log("in purchase!");
    this.purchased.push({"name":this.products[this.productId].name, "Quantity":this.productQty});
    console.log(this.purchased);
  }

  onCart() {
    let purchasedString = JSON.stringify(this.purchased)
    alert(purchasedString) 
    localStorage.setItem("Purchased", purchasedString)
  }
}
