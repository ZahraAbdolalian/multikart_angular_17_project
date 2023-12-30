import { Component, OnInit } from '@angular/core';
import { ScrollingService } from '../service/scrolling.service';
import { SharedImports } from '../shared/shared-imports/shared.module';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    SharedImports
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
