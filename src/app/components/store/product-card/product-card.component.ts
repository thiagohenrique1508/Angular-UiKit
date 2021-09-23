import { Product } from './../../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;

  constructor() {}

  ngOnInit(): void {}
}
