import { Component } from '@angular/core';

@Component({
  selector: 'app-home-recent-story',
  standalone: true,
  imports: [],
  templateUrl: './home-recent-story.component.html',
  styleUrl: './home-recent-story.component.scss'
})
export class HomeRecentStoryComponent {
  stories = [
    {imgUrl : '../../../assets/images/recent1.jpg', date : '25 January 2018'},
    {imgUrl : '../../../assets/images/recent2.jpg', date : '26 January 2018'},
    {imgUrl : '../../../assets/images/recent3.jpg', date : '27 January 2018'},
  ]
}
