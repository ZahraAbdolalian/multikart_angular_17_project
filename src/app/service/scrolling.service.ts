import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ScrollingService {

  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
