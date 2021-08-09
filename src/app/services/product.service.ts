import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  urlApi = "http://localhost:5000/product";
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<Product[]>(this.urlApi);
  }
}
