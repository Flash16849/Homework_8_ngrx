import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { ItemCardComponent } from 'src/app/components/item-card/item-card.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginFormComponent,ItemCardComponent],
  imports: [
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    MdbCarouselModule,
    ReactiveFormsModule,
    LoginFormComponent,
    ItemCardComponent
  ]
})
export class SharedModule { }
