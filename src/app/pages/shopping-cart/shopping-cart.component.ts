import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  constructor(public router: Router,public cartService: CartService){}

  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined; 
  carts: Item[] = [];

  addCart(item: Item){
    this.cartService.addItem(item);
    this.carts = this.cartService.cartItem;
    console.log(this.cartService.cartItem);
    console.log(this.carts);
    
  }

  showDialog() {
    this.dialog?.nativeElement.showModal();
    console.log("show dialog");
  }

  close() {
    this.dialog?.nativeElement.close();
  }
  
}
