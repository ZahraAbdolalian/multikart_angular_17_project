import { Component } from '@angular/core';
import { SpinnerComponent } from '../../shared/shared-component/spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
import { Post } from '../../model/post.model';
import { ApiService } from '../../service/api.service';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-home-category',
  standalone: true,
  imports: [
    SpinnerComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './home-category.component.html',
  styleUrl: './home-category.component.scss'
})
export class HomeCategoryComponent {
  private categoriesNameSubscription!: Subscription;
  private categoriProductsSubscription!: Subscription;

  categoryList: Post[] = []
  isLoading = true
  categoryNameList: string[] = []

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.isLoading = true
    this.categoriesNameSubscription = this.apiService.getCategoriesName()
      .subscribe(data => {
        this.categoryNameList = data

        for (let index = 0; index < this.categoryNameList.length; index++) {
          this.categoriProductsSubscription = this.apiService.getSomeProductInCategory(1, this.categoryNameList[index])
            .subscribe(data => {
              this.categoryList = [...this.categoryList, ...data]
            })
        }
        this.isLoading = false
      })
  }

  ngOnDestroy(): void {
    this.categoriesNameSubscription.unsubscribe();
    this.categoriProductsSubscription.unsubscribe();
  }
}
