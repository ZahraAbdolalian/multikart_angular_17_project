import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports/shared.module';


@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.scss'
})
export class HomeSliderComponent {

  subtitle = 'Every Time'
  title = 'Mittnalier'
  imagePath  = '../../../assets/images/home-slider-1.jpg'

  sliderToggle = true

  sliderHandler(){
      if (this.sliderToggle){
        this.subtitle = 'Welcome To Fashion'
        this.title = 'Men Watch'
        this.imagePath  = '../../../assets/images/home-slider-2.jpg'
        this.sliderToggle = false
      }else {
        this.subtitle = 'Every Time'
        this.title = 'Mittnalier'
        this.imagePath  = '../../../assets/images/home-slider-1.jpg'
        this.sliderToggle = true
      }
  }
}
