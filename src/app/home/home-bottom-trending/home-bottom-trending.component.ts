import { Component } from '@angular/core';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-bottom-trending',
  standalone: true,
  imports: [
    SpinnerComponent,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './home-bottom-trending.component.html',
  styleUrl: './home-bottom-trending.component.scss'
})
export class HomeBottomTrendingComponent {
  private apiSubscription!: Subscription;

  starsArray: any[] = new Array(5);
  productsArray !: Post[] 

  constructor (private apiService : ApiService){}

  ngOnInit(): void {
      this.apiSubscription = this.apiService.getSomeProducts(4)
      .subscribe(data => {
        this.productsArray = data
      })
  }

  ngOnDestroy(): void {
      this.apiSubscription.unsubscribe();
  }
}
