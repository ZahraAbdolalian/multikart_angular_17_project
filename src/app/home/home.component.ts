import { Component } from '@angular/core';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';
import { HomeBannerTimerComponent } from './home-banner-timer/home-banner-timer.component';
import { HomeCategoryComponent } from './home-category/home-category.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeSliderComponent,
    HomeBrandsComponent,
    HomeBannerTimerComponent,
    HomeCategoryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
