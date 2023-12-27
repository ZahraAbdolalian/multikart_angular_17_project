import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../../model/post.model';
import { ApiService } from '../../../service/api.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    SpinnerComponent,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {
  private apiSubscription!: Subscription;

  newProductsArray: Post[] = []
  selectedProducts!: Post[]
  currentSlide = 1

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiSubscription = this.apiService.getSomeProducts(6)
      .subscribe(data => {
        this.newProductsArray = data
        this.selectedProducts = this.newProductsArray.slice(0, 3)
      })
  }

  paginator() {
    if (this.currentSlide == 1) {
      this.selectedProducts = this.newProductsArray.slice(3, 6)
      this.currentSlide = 2
    } else {
      this.selectedProducts = this.newProductsArray.slice(0, 3)
      this.currentSlide = 1
    }
  }

  ngOnDestroy(): void {
      this.apiSubscription.unsubscribe()
  }
}
