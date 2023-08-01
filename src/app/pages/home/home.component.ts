import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(public cartService: CartService, public authService: AuthService) {
  }

  @ViewChild('cart') dialog: ElementRef<HTMLDialogElement> | undefined; 
  carts: Item[] = [];

  addCart(item: Item){
    this.cartService.addItem(item);
    this.carts = this.cartService.cartItem;
  }

  showDialog() {
    this.dialog?.nativeElement.showModal();
    console.log("show dialog");
  }

  close() {
    this.dialog?.nativeElement.close();
  }

  
}
