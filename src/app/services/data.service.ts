import { Product } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public url = 'http://localhost:3000/v1';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  authenticate(
    data: any // passei o parâmetro como ANY porque o TypeScript não deixava compilar
  ) {
    return this.http.post(`${this.url}/accounts/authenticate`, data);
  }
}
