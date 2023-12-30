import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { CartProduct } from '../model/cart-product.model';
import { UserCartService } from '../service/user-cart.service';
import { ScrollingService } from '../service/scrolling.service';
import { SharedImports } from '../shared/shared-imports/shared.module';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  dataSource = this.userCart.cartProducts

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'action', 'total'];

  @ViewChild(MatTable) table!: MatTable<CartProduct>;

  constructor(
    private userCart: UserCartService,
    private scrollinhService: ScrollingService
  ) { }

  ngOnInit(): void {
    this.scrollinhService.scrollToTop()
  }

  getTotalCost() {
    return this.dataSource.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  reduceQuantity(quantityElem: HTMLInputElement, id: number) {
    let quantity = +quantityElem.value
    if (quantity > 1) {
      quantity--
      this.userCart.updateQuantity(id, quantity)
    }
    quantityElem.value = quantity.toString()
  }

  increaseQuantity(quantityElem: HTMLInputElement, id: number) {
    let quantity = +quantityElem.value
    quantity++
    quantityElem.value = quantity.toString()
    this.userCart.updateQuantity(id, quantity)
  }

  removeProduct(id: number) {
    this.userCart.removeProduct(id);
    this.table.renderRows();
  }
}
