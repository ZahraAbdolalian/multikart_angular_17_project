import { Component, Input } from '@angular/core';
import { SharedImports } from '../../shared/shared-imports/shared.module';


@Component({
  selector: 'app-checkout-card',
  standalone: true,
  imports: [
    SharedImports
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
