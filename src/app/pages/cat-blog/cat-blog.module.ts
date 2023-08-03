import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatBlogRoutingModule } from './cat-blog-routing.module';
import { CatBlogComponent } from './cat-blog.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { CardComponent } from './Components/card/card.component';


@NgModule({
  declarations: [
    CatBlogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatBlogRoutingModule,
    SharedModule
  ]
})
export class CatBlogModule { }
