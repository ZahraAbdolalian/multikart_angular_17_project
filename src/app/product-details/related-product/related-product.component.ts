import { Component } from '@angular/core';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [
    SpinnerComponent,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss'
})
export class RelatedProductComponent {
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  relatedProducts !: Post[]

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiSubscription = this.apiService.getSomeProducts(6)
      .subscribe(data => {
        this.relatedProducts = data
      })
  }

  ngOnDestroy(): void {
      this.apiSubscription.unsubscribe()
  }
}
