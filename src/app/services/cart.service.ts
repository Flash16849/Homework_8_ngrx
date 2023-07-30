import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  constructor() { }

  saveLocal(){
    localStorage.setItem('listItem', JSON.stringify(this.listItem));
  }

  loadLocal(){
    let list = localStorage.getItem('listItem');
    if(list){
      return JSON.parse(list);
    }else{
      return [];
    }
  }

  listItem = this.loadLocal();

  // itemList: Item[] = [
  //   {
  //     id: '1',
  //     name: 'Unisex Crocs Siren Clog',
  //     price: 2.395,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/208547-2Y2-1_720x.jpg?v=1688538972',
  //     description: 'Comfortable',
  //   },
  //   {
  //     id: '2',
  //     name: 'Unisex Crocs Siren Clog',
  //     price: 2.395,
  //     instock: 5,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/208547-001-1_720x.jpg?v=1688538356',
  //     description: 'Comfortable',
  //   },

  //   {id: '3',
  //     name: 'Unisex Crocs Printed Clog',
  //     price: 1.595,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/206230-0ZI-1_720x.jpg?v=1687242249',
  //     description: 'Comfortable',
  //   },

  //   {
  //     id: '4',
  //     name: 'Unisex Crocs Baya Clog',
  //     price: 1.495,
  //     instock: 3, 
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/10126-2V3-1_720x.jpg?v=1687241938',
  //     description: 'Comfortable',
  //   },

  //   {
  //     id: '5',
  //     name: 'Unisex Crocs Classic Clog',
  //     price: 1.495,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-6WD-1_720x.jpg?v=1687241860',
  //     description: 'Comfortable',
  //   },

  //   {
  //     id: '6',
  //     name: 'Unisex Crocs Classic Clog',
  //     price: 1.495,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-4NS-1_720x.png?v=1687490600',
  //     description: 'Comfortable',
  //   },

  //   {
  //     id: '7',
  //     name: 'Unisex Crocs Classic Clog',
  //     price: 1.495,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-1LM-1_720x.jpg?v=1687229759',
  //     description: 'Comfortable',
  //   },

  //   {
  //     id: '8',
  //     name: 'Unisex Crocs Classic Skull Print Clog',
  //     price: 1.595,
  //     instock: 3,
  //     quantity: 0,
  //     img: 'https://www.crocs.com.vn/cdn/shop/files/208993-103-1_720x.jpg?v=1686728931',
  //     description: 'Comfortable',
  //   },
  // ];

  submit(item: Item){
    this.listItem.push(item);
    this.saveLocal();
  }


  cartItem: Item[] = [];

  addItem(item: Item) {
    let index = this.cartItem.findIndex((card) => card.id === item.id);
    if (index !== -1) {
      if(this.cartItem[index].instock === 0){ 
        alert("Hết hàng rồi!!");
      } else {
        this.cartItem[index].quantity += 1;
        this.cartItem[index].instock -= 1;
      }
    } else {
      item.quantity = 1;
      item.instock -= 1;
      this.cartItem.push(item);
      alert("Thêm hàng thành công!!");
    }
  }

  reduceItem(item: Item) {
    let index = this.cartItem.findIndex((card) => card.id === item.id);
    if (index !== -1) {
      if(this.cartItem[index].quantity === 1){
        this.cartItem[index].quantity -= 1;
        this.cartItem[index].instock += 1;
        this.deleteItem(item);
      } else {
        this.cartItem[index].quantity -= 1;
        this.cartItem[index].instock += 1;
      }
    }
  }



  deleteItem(item: Item) {
    for(let i = 0; i<this.cartItem.length; i++){
      if(this.cartItem[i].id === item.id){
        this.cartItem.splice(i,1);
        alert("Xóa hàng thành công!!");
      }
    }
    console.log(item);
    
  }

  
}
