import { Injectable } from '@angular/core';
import { CartProduct } from '../model/cart-product.model';

@Injectable({
  providedIn: 'root'
})
export class UserCartService {

  cartProducts: CartProduct[] = []

  constructor() { }

  findProductIndex(id: number):number {
    return this.cartProducts.findIndex((p) => p.id === id)
  }

  addProduct(newProduct: CartProduct) {
    const existingProductIndex = this.findProductIndex(newProduct.id)
    if (existingProductIndex !== -1) {
      this.cartProducts[existingProductIndex].quantity += newProduct.quantity;
      this.cartProducts[existingProductIndex].total = this.getTotal(existingProductIndex, newProduct.price)
    } else {
      this.cartProducts.push({ ...newProduct });
    }
  }

  updateQuantity(id: number, newQuantity: number) {
    const productIndex = this.findProductIndex(id)
    const price = this.cartProducts[productIndex].price
    this.cartProducts[productIndex].quantity = newQuantity
    this.cartProducts[productIndex].total = this.getTotal(newQuantity, price)
  }

  getTotal(quantity: number, price: number): number {
    return quantity * price
  }

  removeProduct(id: number) {
    const productIndex = this.findProductIndex(id)
    this.cartProducts.splice(productIndex, 1)
  }
}
