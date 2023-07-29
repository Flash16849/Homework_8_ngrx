import { Component, Input } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent{
  constructor(public cartService: CartService) { }
  @Input()

  item!: Item;
  
}
