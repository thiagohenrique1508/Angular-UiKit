import { Product } from './../../../models/product.model';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {
  public products$: Observable<Product[]> | undefined;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }
}
