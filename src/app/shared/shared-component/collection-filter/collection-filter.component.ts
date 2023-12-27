import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-collection-filter',
  standalone: true,
  imports: [
    MatListModule,
    RouterLink
  ],
  templateUrl: './collection-filter.component.html',
  styleUrl: './collection-filter.component.scss'
})
export class CollectionFilterComponent {
  categoryArray = [
    'electronics', 'jewelery', "men's clothing", "women's clothing"
  ]

  isCategoryListOpen = true;

  toggleCategoryList() {
    this.isCategoryListOpen = !this.isCategoryListOpen;
  }
}
