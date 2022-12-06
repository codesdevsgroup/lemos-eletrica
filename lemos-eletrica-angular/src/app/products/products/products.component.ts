import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/Products';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: Product[] = []
  products: Product[] = []

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((items) => {
      console.log(items)
      const data = items

      this.allProducts = data
      this.products = data

    })
  }


}
