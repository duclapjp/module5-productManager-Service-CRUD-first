import {Injectable} from '@angular/core';
import {Product} from "../interface/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/product');
  }

  createNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/product/', product)
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`http://localhost:8080/product/${id}`)
  }

  editProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`http://localhost:8080/product/${id}`, product)
  }

  deleteProductById(id: number): Observable<Product> {
    return this.http.delete<Product>(`http://localhost:8080/product/${id}`)
  }
  getProductByCode(code: String): Observable<Product[]>{
    return this.http.get<Product[]>(`http://localhost:8080/product/search/${code}`)
  }
}
