import { Component } from '@angular/core';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HomeBrandsComponent } from './home-brands/home-brands.component';
import { HomeBannerTimerComponent } from './home-banner-timer/home-banner-timer.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomeTopTrendingComponent } from './home-top-trending/home-top-trending.component';
import { HomeBottomTrendingComponent } from './home-bottom-trending/home-bottom-trending.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeSliderComponent,
    HomeBrandsComponent,
    HomeBannerTimerComponent,
    HomeCategoryComponent,
    HomeTopTrendingComponent,
    HomeBottomTrendingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
