import { Component, Input} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Item } from 'src/app/models/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


  constructor(public cartService: CartService, protected authService: AuthService) {
    
    this.myForm.addControl('name',this.name);
    this.myForm.addControl('price',this.price);
    this.myForm.addControl('quantity',this.quantity);
    this.myForm.addControl('description',this.description);
  }
  myForm: FormGroup = new FormGroup({});
  name: FormControl = new FormControl('');
  price: FormControl = new FormControl('');
  instock: FormControl = new FormControl('');
  quantity: FormControl = new FormControl('');
  img: FormControl = new FormControl('');
  img2: FormControl = new FormControl('');
  description: FormControl = new FormControl('');

  submit(){
    let newItem: Item = {
      id: String(this.cartService.listItem.length + 1),
      name: this.name.value,
      price: this.price.value,
      instock: this.instock.value,
      quantity: this.quantity.value,
      img: this.img.value,
      img2: this.img2.value,
      description: this.description.value
    }
    this.cartService.submit(newItem);
  }
}
