import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent{
  @Input() item!: Item;;
  @Output() cart = new EventEmitter();

  tenne() {
    this.cart.emit();
    alert("Đã thêm vào giỏ hàng");
  }
  
  
}
