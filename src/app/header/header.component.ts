import { Component } from '@angular/core';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BottomHeaderComponent,
    TopHeaderComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
