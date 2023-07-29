import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from './models/item.model';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstProject';

  constructor(public cartService: CartService, public router: Router) {
    this.cartService.showData();
  }

  // carts: Item[] = [];

  

  navigateToShoppingCart() {
    this.router.navigate(['/shopping-cart'])
  }

 

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
