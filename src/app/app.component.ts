import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from './models/item.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'firstProject';

  carts: Item[] = [];

  listItem: Item[] = [
    {
      name: 'Unisex Crocs Siren Clog',
      price: 2.395,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/208547-2Y2-1_720x.jpg?v=1688538972',
      description: 'Comfortable',
    },
    {
      name: 'Unisex Crocs Siren Clog',
      price: 2.395,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/208547-001-1_720x.jpg?v=1688538356',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Printed Clog',
      price: 1.595,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/206230-0ZI-1_720x.jpg?v=1687242249',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Baya Clog',
      price: 1.495,
      quantity: 3, 
      img: 'https://www.crocs.com.vn/cdn/shop/files/10126-2V3-1_720x.jpg?v=1687241938',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Classic Clog',
      price: 1.495,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/10001-6WD-1_720x.jpg?v=1687241860',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Classic Clog',
      price: 1.495,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/10001-4NS-1_720x.png?v=1687490600',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Classic Clog',
      price: 1.495,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/10001-1LM-1_720x.jpg?v=1687229759',
      description: 'Comfortable',
    },

    {
      name: 'Unisex Crocs Classic Skull Print Clog',
      price: 1.595,
      quantity: 3,
      img: 'https://www.crocs.com.vn/cdn/shop/files/208993-103-1_720x.jpg?v=1686728931',
      description: 'Comfortable',
    },
  ];

  check() {
    console.log(this.listItem);
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
