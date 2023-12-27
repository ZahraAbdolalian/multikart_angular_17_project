import { Component } from '@angular/core';
import { TitleComponent } from '../shared/shared-component/title/title.component';
import { ProductInformationComponent } from './product-information/product-information.component';
import { CollectionFilterComponent } from '../shared/shared-component/collection-filter/collection-filter.component';
import { ProductServiceComponent } from './product-service/product-service.component';
import { NewProductComponent } from '../shared/shared-component/new-product/new-product.component';
import { TabProductComponent } from './tab-product/tab-product.component';
import { RelatedProductComponent } from './related-product/related-product.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    TitleComponent,
    ProductInformationComponent,
    CollectionFilterComponent,
    ProductServiceComponent,
    NewProductComponent,
    TabProductComponent,
    RelatedProductComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productName =''

  getProductName(productName : string){
    this.productName = productName
  }
}
