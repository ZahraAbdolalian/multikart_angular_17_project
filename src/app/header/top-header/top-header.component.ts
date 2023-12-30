import { Component } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports/shared.module';



@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [
    SharedImports
  ],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {

}
