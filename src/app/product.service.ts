import {Injectable} from '@angular/core';
import {Product} from "./product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product [] = [
    {
      code: 'c0921h1',
      name: 'nokia',
      description: 'hàng hot'
    },
    {
      code: 'c0821h1',
      name: 'samsung',
      description: 'hàng đểu'
    }
  ]

  constructor() {
  }

  getAllProduct() {
    return this.products;
  }

  createNewProduct(product: Product) {
    this.products.push(product);
  }

  // @ts-ignore
  getProductById(index: number): Product {
    return this.products[index];
  }
  editProduct(index: number, product: Product){
    this.products[index] = product;
  }
  deleteProductById(index: number) {
    this.products.splice(index,1);
  }
}
