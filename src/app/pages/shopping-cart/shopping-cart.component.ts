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

  @ViewChild('itemModified') dialog: ElementRef<HTMLDialogElement> | undefined; 

  showDialog() {
    this.dialog?.nativeElement.showModal();
    console.log("show dialog");
  }

  close() {
    this.dialog?.nativeElement.close();
  }
  
}
