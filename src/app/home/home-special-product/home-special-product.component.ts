import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { SharedImports } from '../../shared/shared-imports/shared.module';
import { CartProduct } from '../../model/cart-product.model';
import { UserCartService } from '../../service/user-cart.service';

@Component({
  selector: 'app-home-special-product',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './home-special-product.component.html',
  styleUrl: './home-special-product.component.scss'
})
export class HomeSpecialProductComponent implements OnInit, OnDestroy{
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  productsArray !: Post[]

  constructor (private apiService : ApiService , private userCart: UserCartService
  ){}

  ngOnInit(): void {
      this.apiSubscription = this.apiService.getSomeProducts(5)
      .subscribe(data => {
        this.productsArray = data
      })
  }

  addToCart(product: Post , quantity: number) {
    const newProduct : CartProduct= {
      name: product.title,
      id: product.id,
      image : product.image,
      price : product.price,
      quantity : quantity,
      total : (product.price * quantity)
    }
    this.userCart.addProduct(newProduct)
  }

  ngOnDestroy(): void {
   this.apiSubscription.unsubscribe()   
  }
}
