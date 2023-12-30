import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../shared/shared-component/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ScrollingService } from '../service/scrolling.service';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    TitleComponent,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit{

  constructor(private scrollinhService: ScrollingService) { }

  ngOnInit(): void {
    this.scrollinhService.scrollToTop()
  }
}
