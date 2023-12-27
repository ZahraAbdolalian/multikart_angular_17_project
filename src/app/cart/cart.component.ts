import { Component, ViewChild } from '@angular/core';
import { TitleComponent } from '../shared/shared-component/title/title.component';
import { MatTable, MatTableModule } from '@angular/material/table';
import { CartProduct } from '../model/cart-product.model';
import { UserCartService } from '../service/user-cart.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TitleComponent,
    MatTableModule,
    RouterLink,
    CurrencyPipe,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  dataSource = this.userCart.cartProducts

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'action', 'total'];

  @ViewChild(MatTable) table!: MatTable<CartProduct>;

  constructor(
    private userCart: UserCartService
  ) { }

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
