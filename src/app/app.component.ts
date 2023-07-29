import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from './models/item.model';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstProject';

  constructor(public cartService: CartService) {
    this.cartService.showData();
  }

  // carts: Item[] = [];

  

  

 

  // addCart(item: any) {
  //   let index = this.carts.findIndex((cart) => cart.id === item.id);
  //   if (index !== -1) {
  //     this.carts[index].quantity++;
  //   } else {
  //     item.quantity = 1;

  //     this.carts.push(item);
  //   }
  // }
  // showDialog() {
  //   this.dialog?.nativeElement.showModal();
  // }
  // close() {
  //   this.dialog?.nativeElement.close();
  // }
}
