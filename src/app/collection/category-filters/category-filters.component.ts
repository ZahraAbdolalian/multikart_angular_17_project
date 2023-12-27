import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';


@Component({
  selector: 'app-category-filters',
  standalone: true,
  imports: [
    MatSliderModule
  ],
  templateUrl: './category-filters.component.html',
  styleUrl: './category-filters.component.scss'
})
export class CategoryFiltersComponent {
  isBrandListOpen = true;
  isColorListOpen = true;
  isPriceListOpen = true;

  brandList = ['titan', 'fossil', 'casio']
  colorList = [
    'silver', 'sienna', 'navy', 'bisque',
    'chocolate', 'steelblue', 'wheat',
    'dimgrey', 'black', 'palegoldenrod', 'dimgray'
  ]

  toggleBrandList() {
    this.isBrandListOpen = !this.isBrandListOpen;
  }

  toggleColorList() {
    this.isColorListOpen = !this.isColorListOpen;
  }

  togglePriceList() {
    this.isPriceListOpen = !this.isPriceListOpen
  }

}
