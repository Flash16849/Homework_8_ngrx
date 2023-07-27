import { Component, Input} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Item } from 'src/app/models/item.model';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input()

  listItem: Item[] = [];

  constructor() {
    this.myForm.addControl('name',this.name);
    this.myForm.addControl('price',this.price);
    this.myForm.addControl('quantity',this.quantity);
    this.myForm.addControl('description',this.description);
  }
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  quantity: FormControl = new FormControl('');
  img: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  submit(){
    let newItem: Item = {
      
      name: this.name.value,
      price: this.price.value,
      quantity: this.quantity.value,
      img: this.img.value,
      description: this.description.value
    }
    this.listItem.push(newItem);
    console.log(this.listItem);
    
  }
}
