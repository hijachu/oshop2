import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../modals/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('product') product: Product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') showActions = true;

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product: Product) {
  }

}
