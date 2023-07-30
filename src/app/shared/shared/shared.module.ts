import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { CartDialogComponent } from 'src/app/components/cart-dialog/cart-dialog.component';

@NgModule({
  declarations: [LoginFormComponent,ItemCardComponent, CartDialogComponent],
  imports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  exports:[
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    LoginFormComponent,
    ItemCardComponent,
    NavbarComponent,
    CartDialogComponent
  ]
})
export class SharedModule { }
