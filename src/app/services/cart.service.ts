import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

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

  showData(){
    console.log(this.listItem);
    
  }

  constructor() { }
}
