import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-dialog',
  templateUrl: './item-dialog.component.html',
  styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent {
  @Input() lists!: Item[];
  @Input() item!: Item;

  
  constructor(public cartService: CartService) {
    this.myForm.addControl('name',this.name);
    this.myForm.addControl('price',this.price);
    this.myForm.addControl('instock',this.instock);
    this.myForm.addControl('img',this.img);
    this.myForm.addControl('img2',this.img2);
    this.myForm.addControl('description',this.description);
  }
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  instock: FormControl = new FormControl('');
  img: FormControl = new FormControl('');
  img2: FormControl = new FormControl('');
  description: FormControl = new FormControl('');


  // modifyItem(item: Item){
  //   if(this.name.value != ''){
  //     item.name = this.name.value;
  //   }
  //   else if(this.price.value != ''){
  //     item.price = this.price.value;
  //   }
  //   else if(this.instock.value != ''){
  //     item.instock = this.instock.value;
  //   }
  //   else if(this.img.value != ''){
  //     item.img = this.img.value;
  //   }
  //   else if(this.img2.value != ''){
  //     item.img2 = this.img2.value;
  //   }
  //   else if(this.description.value != ''){
  //     item.description = this.description.value;
  //   }
    
  //   this.cartService.updateItemList(item);
  // }

  update(){
    let newItem = this.cartService.itemTemp;
    newItem = {...newItem, ...this.myForm.value};
    this.cartService.updateItemList(newItem);
  }

  
}
