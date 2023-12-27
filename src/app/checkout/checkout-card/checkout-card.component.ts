import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-checkout-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatTableModule
  ],
  templateUrl: './checkout-card.component.html',
  styleUrl: './checkout-card.component.scss'
})
export class CheckoutCardComponent {
  displayedColumns: string[] = ['title', 'value']

  @Input() cardTitle: string = '';
  @Input() cardSubtitle: string = '';
  @Input() dataSource!: { title: string, value: string }[];
}
