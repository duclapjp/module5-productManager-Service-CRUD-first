import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor(private http: HttpClient) { }
  pageUser(request: any): Observable<Product[]> {
    const params = request;
    return this.http.get<Product[]>('http://localhost:8080/product', {params});
  }
}
