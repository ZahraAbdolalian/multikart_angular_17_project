import { Component } from '@angular/core';
import { TitleComponent } from '../shared/shared-component/title/title.component';
import { CollectionFilterComponent } from '../shared/shared-component/collection-filter/collection-filter.component';
import { CategoryFiltersComponent } from './category-filters/category-filters.component';
import { NewProductComponent } from '../shared/shared-component/new-product/new-product.component';
import { CollectionBannerComponent } from './collection-banner/collection-banner.component';
import { ProductsCategorizationComponent } from './products-categorization/products-categorization.component';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    TitleComponent,
    CollectionFilterComponent,
    CategoryFiltersComponent,
    NewProductComponent,
    CollectionBannerComponent,
    ProductsCategorizationComponent
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

}
