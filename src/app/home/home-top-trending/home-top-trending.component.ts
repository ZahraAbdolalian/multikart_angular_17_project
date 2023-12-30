import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { SharedImports } from '../../shared/shared-imports/shared.module';


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
    private router : Router
    ){}

  ngOnInit(): void {
    this.apiSubscription = this.apiService.getSomeProducts(8).subscribe(data => {
      this.newArrivalItems = data
      console.log(this.newArrivalItems);
    })
  }

  onLoadProductDetails(){
    this.router.navigate(['/product-details'])
  }

  ngOnDestroy(): void {
      this.apiSubscription.unsubscribe()
  }
}
