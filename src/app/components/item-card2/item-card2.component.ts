import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-item-card2',
  templateUrl: './item-card2.component.html',
  styleUrls: ['./item-card2.component.scss']
})
export class ItemCard2Component {
  a: boolean = false;
  constructor(public cartService: CartService, protected authService: AuthService) { }
  @Input() item!: Item;
  @Output() xoaHang = new EventEmitter;
  @Output() capNhat = new EventEmitter;

  deleteFList(){
    this.xoaHang.emit();    
  }

  modify(){
    this.capNhat.emit();    
  }
}
