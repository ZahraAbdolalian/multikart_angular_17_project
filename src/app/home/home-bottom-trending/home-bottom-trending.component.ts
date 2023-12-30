import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { SharedImports } from '../../shared/shared-imports/shared.module';

@Component({
  selector: 'app-home-bottom-trending',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './home-bottom-trending.component.html',
  styleUrl: './home-bottom-trending.component.scss'
})
export class HomeBottomTrendingComponent implements OnInit{
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
