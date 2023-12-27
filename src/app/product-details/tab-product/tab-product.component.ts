import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-tab-product',
  standalone: true,
  imports: [
    MatTabsModule
  ],
  templateUrl: './tab-product.component.html',
  styleUrl: './tab-product.component.scss'
})
export class TabProductComponent {
  starsArray: any[] = new Array(5);
}
