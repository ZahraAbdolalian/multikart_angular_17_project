import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { SharedImports } from '../../shared/shared-imports/shared.module';
import { CartProduct } from '../../model/cart-product.model';
import { UserCartService } from '../../service/user-cart.service';


@Component({
  selector: 'app-home-top-trending',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './home-top-trending.component.html',
  styleUrl: './home-top-trending.component.scss'
})
export class HomeTopTrendingComponent implements OnInit, OnDestroy{
  private apiSubscription!: Subscription;

  labels = ['NEW ARRIVAL','ON SALE','BEST SELLERS']
  starsArray: any[] = new Array(5);
  newArrivalItems !:Post[]

  constructor (
    private apiService:ApiService,
    private router : Router,
    private userCart: UserCartService
    ){}

  ngOnInit(): void {
    this.apiSubscription = this.apiService.getSomeProducts(8).subscribe(data => {
      this.newArrivalItems = data;
    })
  }

  onLoadProductDetails(){
    this.router.navigate(['/product-details'])
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
