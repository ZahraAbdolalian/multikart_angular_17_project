import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-top-trending',
  standalone: true,
  imports: [
    MatTabsModule,
    SpinnerComponent,
    CurrencyPipe
  ],
  templateUrl: './home-top-trending.component.html',
  styleUrl: './home-top-trending.component.scss'
})
export class HomeTopTrendingComponent {
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
