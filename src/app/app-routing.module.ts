import {Component, ComponentRef, NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ListProductComponent} from "./list-product/list-product.component";
import {DetailComponent} from "./detail/detail.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";

const routes: Routes = [{
  path: 'create',
  component: CreateProductComponent
},
  {
    path: 'list',
    component: ListProductComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
