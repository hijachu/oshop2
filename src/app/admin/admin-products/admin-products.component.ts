import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/modals/product';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription;

  @ViewChild(DatatableComponent, null) tableResource: DatatableComponent;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
      .subscribe((products: Product[]) => this.products = products);
  }

  filter(query: string) {
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products;

    this.tableResource.rows = filteredProducts;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
