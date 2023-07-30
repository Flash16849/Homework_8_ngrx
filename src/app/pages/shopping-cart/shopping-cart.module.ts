import { NgModule } from '@angular/core';
import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartComponent } from './shopping-cart.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    ShoppingCartRoutingModule,
    SharedModule
  ]
})
export class ShoppingCartModule { }
