import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ItemCard2Component } from 'src/app/components/item-card2/item-card2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { CartDialogComponent } from 'src/app/components/cart-dialog/cart-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { ItemDialogComponent } from 'src/app/components/item-dialog/item-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginFormComponent,
    ItemCardComponent,
    ItemCard2Component,
    CartDialogComponent,
    NavbarComponent,
    ItemDialogComponent
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    LoginFormComponent,
    ItemCardComponent,
    ItemCard2Component,
    NavbarComponent,
    CartDialogComponent,
    MatIconModule,
    ItemDialogComponent,
    MatDialogModule,
    HttpClientModule
  ]
})
export class SharedModule { }
