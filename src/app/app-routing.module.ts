import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{ path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

{ path: 'shopping-cart', loadChildren: () => import('./pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },

{ path: 'cat-blog', loadChildren: () => import('./pages/cat-blog/cat-blog.module').then(m => m.CatBlogModule) },

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
