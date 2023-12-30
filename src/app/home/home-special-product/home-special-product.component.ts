import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-special-product',
  standalone: true,
  imports: [
    SpinnerComponent,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './home-special-product.component.html',
  styleUrl: './home-special-product.component.scss'
})
export class HomeSpecialProductComponent implements OnInit, OnDestroy{
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  productsArray !: Post[]

  constructor (private apiService : ApiService){}

  ngOnInit(): void {
      this.apiSubscription = this.apiService.getSomeProducts(5)
      .subscribe(data => {
        this.productsArray = data
      })
  }

  ngOnDestroy(): void {
   this.apiSubscription.unsubscribe()   
  }
}
