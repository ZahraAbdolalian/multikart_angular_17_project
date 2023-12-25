import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-top-header',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.scss'
})
export class TopHeaderComponent {

}
