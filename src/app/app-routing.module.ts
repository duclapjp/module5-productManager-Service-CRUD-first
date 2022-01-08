import {Component, ComponentRef, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {DetailComponent} from "./detail/detail.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";
import {PageProductComponent} from "./page-product/page-product.component";
import {SearchProductComponent} from "./search-product/search-product.component";
import {ProductListComponent} from "./socket-product/product-list/product-list.component";
import {ChatComponent} from "./chat/chat.component";

const routes: Routes = [{
  path: 'create',
  component: CreateProductComponent
},
  // {
  //   path: 'list',
  //   component: ListProductComponent
  // },
  {
    path: 'list',
    component: PageProductComponent
  },
  {
    path:'product/:id',
    component:DetailComponent
  },
  {
    path: 'product/edit/:id',
    component:EditProductComponent
  },
  {
    path:'product/delete/:id',
    component:DeleteProductComponent
  },
  {
    path:'product/search/:code',
    component:SearchProductComponent
  },
  {
    path:'socket',
    component:ProductListComponent
  },
  {
    path:'chat',
    component:ChatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
