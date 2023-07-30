import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent {
  @Input() carts!: Item[]
  //item!: Item;
  
  
  @Output() closeD = new EventEmitter();
  constructor(public cartService: CartService){}

  close() {
    this.closeD.emit();
  }

  total() {
    let total = 0;
    for (let i = 0; i < this.carts.length; i++) {
      let temp = this.carts[i].price * this.carts[i].quantity;
      total += temp;
    }
    return total;
  }

  deleteP(item: Item){
    this.cartService.deleteItem(item);
    this.carts = this.cartService.cartItem;
  }
}
