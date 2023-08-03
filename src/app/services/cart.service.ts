import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';
import { 
  Firestore, 
  addDoc,
  collection,
  collectionData,
  collectionSnapshots,
  doc, getDoc, setDoc, deleteDoc, query, where, docSnapshots, getDocs, updateDoc 
} from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ItemDialogComponent } from '../components/item-dialog/item-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  listItem!: Item [];
  cartItem: Item[] = [];
  itemsCollection = collection(this.fireStore, 'items');
  
  constructor(public fireStore: Firestore, public dialog: MatDialog) { 
    this.getData()
    // for(let item of this.itemList){
    //   addDoc(this.itemsCollection, item)
    // }
 
    // this.updateItemList({
    //   id: "3",
    //   name: "HEHE",
    //   price: 1.4587,
    //   instock: 9,
    //   quantity: 0,
    //   img: '',
    //   img2: '',
    //   description: ''
    // })
  }

  // 

  

  getData(){
    collectionSnapshots(this.itemsCollection).subscribe((snapshot) => {
      let result = snapshot.map((doc) => doc.data())
      this.listItem = result as Item[];
    })
  }


  
  submit(item: Item){
    addDoc(this.itemsCollection, item);
  }

  async deleteItemInItemList(id: string){
    let q = query(this.itemsCollection, where("id", "==", id));
    let a = await getDocs(q);
    await deleteDoc(a.docs[0].ref);
    alert(" Đã xóa sản phẩm khỏi danh sách!! ");
  }

  

  deleteItem(item: Item) {
    for(let i = 0; i<this.cartItem.length; i++){
      if(this.cartItem[i].id === item.id){
        this.cartItem.splice(i,1);
        alert("Xóa thành công !!");
      }
    }
    console.log(item);
  }


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
      alert("Thêm thành công!!");
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


  itemTemp!: Item;
  modify(item: Item){
    this.dialog.open(ItemDialogComponent);
    this.itemTemp = item;
  }

  async updateItemList(item: Item){
    let q = query(this.itemsCollection, where("id", "==", item.id));
    let a = await getDocs(q);
    await updateDoc(a.docs[0].ref, {...item});
    alert(" Đã cập nhật sản phẩm!! ");
  }

  

  // saveLocal(){
  //   localStorage.setItem('listItem', JSON.stringify(this.listItem));
  // }

  // loadLocal(){
  //   let list = localStorage.getItem('listItem');
  //   if(list){
  //     return JSON.parse(list);
  //   }else{
  //     return [];
  //   }
  // }

  
  //itemList: Item[] = [
    //   {
    //     id: '1',
    //     name: 'Unisex Crocs Siren Clog',
    //     price: 2.395,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/208547-2Y2-1_720x.jpg?v=1688538972',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/208547-2Y2-2_360x.jpg?v=1688538973',
    //     description: 'Comfortable',
    //   },
    //   {
    //     id: '2',
    //     name: 'Unisex Crocs Siren Clog',
    //     price: 2.395,
    //     instock: 5,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/208547-001-1_720x.jpg?v=1688538356',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/208547-001-2_360x.jpg?v=1688538356',
    //     description: 'Comfortable',
    //   },
  
    //   {id: '3',
    //     name: 'Unisex Crocs Printed Clog',
    //     price: 1.595,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/206230-0ZI-1_720x.jpg?v=1687242249',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/206230-0ZI-2_360x.jpg?v=1687242250',
    //     description: 'Comfortable',
    //   },
  
    //   {
    //     id: '4',
    //     name: 'Unisex Crocs Baya Clog',
    //     price: 1.495,
    //     instock: 3, 
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/10126-2V3-1_720x.jpg?v=1687241938',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/10126-2V3-2_360x.jpg?v=1687241938',
    //     description: 'Comfortable',
    //   },
  
    //   {
    //     id: '5',
    //     name: 'Unisex Crocs Classic Clog',
    //     price: 1.495,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-6WD-1_720x.jpg?v=1687241860',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/10001-6WD-2_360x.jpg?v=1687241860',
    //     description: 'Comfortable',
    //   },
  
    //   {
    //     id: '6',
    //     name: 'Unisex Crocs Classic Clog',
    //     price: 1.495,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-4NS-1_720x.png?v=1687490600',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/10001-4NS-2_360x.png?v=1687490600',
    //     description: 'Comfortable',
    //   },
  
    //   {
    //     id: '7',
    //     name: 'Unisex Crocs Classic Clog',
    //     price: 1.495,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/10001-1LM-1_720x.jpg?v=1687229759',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/10001-1LM-2_360x.jpg?v=1687229759',
    //     description: 'Comfortable',
    //   },
  
    //   {
    //     id: '8',
    //     name: 'Unisex Crocs Classic Skull Print Clog',
    //     price: 1.595,
    //     instock: 3,
    //     quantity: 0,
    //     img: 'https://www.crocs.com.vn/cdn/shop/files/208993-103-1_720x.jpg?v=1686728931',
    //     img2: 'https://cdn.shopify.com/s/files/1/0585/8181/1355/files/208993-103-2_360x.jpg?v=1686728931',
    //     description: 'Comfortable',
    //   },
    // ];
  
  
}
