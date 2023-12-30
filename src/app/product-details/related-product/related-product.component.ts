import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { SharedImports } from '../../shared/shared-imports/shared.module';

@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss'
})
export class RelatedProductComponent implements OnInit, OnDestroy{
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
