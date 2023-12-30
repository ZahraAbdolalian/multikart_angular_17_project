import { Component, OnInit } from '@angular/core';
import { TitleComponent } from '../shared/shared-component/title/title.component';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartProduct } from '../model/cart-product.model';
import { UserCartService } from '../service/user-cart.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { CheckoutCardComponent } from './checkout-card/checkout-card.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ScrollingService } from '../service/scrolling.service';



@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    TitleComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    CurrencyPipe,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    CheckoutCardComponent,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;
  formFields = ['First Name', 'Last Name', 'Phone', 'Email', 'Country', 'Address', 'City', 'State', 'Postal Code']
  countryOptions = ['India', 'USA', 'Australia']

  dataSourceStripeJs = [
    { title: 'CART NUMBER', value: '4242424242424242' },
    { title: 'MM/YY', value: '2/2020' },
    { title: 'CVC', value: '2222' },
  ]

  dataSourcePaypal = [
    { title: 'CART NUMBER', value: '4152521541244' },
    { title: 'MM/YY', value: '11/18' },
    { title: 'CVC', value: '521' },
  ]

  productsList: CartProduct[] = this.userCart.cartProducts

  subtotal = 0

  constructor(private userCart: UserCartService, private scrollinhService: ScrollingService) { }

  ngOnInit(): void {

    this.scrollinhService.scrollToTop()

    this.checkoutForm = new FormGroup({
      'First Name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)]),
      'Last Name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]{3,}$/)]),
      'Phone': new FormControl('', [Validators.required, Validators.pattern(/^(\+98|0)?9\d{9}$/)]),
      'Email': new FormControl('', [Validators.required, Validators.email]),
      'Country': new FormControl('', Validators.required),
      'Address': new FormControl('', Validators.required),
      'City': new FormControl('', Validators.required),
      'State': new FormControl('', Validators.required),
      'Postal Code': new FormControl('', Validators.required),
    })

    this.productsList.forEach(element => {
      this.subtotal += (element.price * element.quantity)
    });
  }

  getErrorMessage(label: string) {
    if (this.checkoutForm.get(label)?.hasError('required')) {
      return `${label} is required`
    }
    else if (this.checkoutForm.get(label)?.hasError('pattern')) {
      if (label === 'Phone') {
        return 'Phone number must be a valid number.'
      }
      return `${label} must be an alphabates.`
    }
    else if (this.checkoutForm.get('email')) {
      return 'Invalid Email'
    }
    return '';
  }
}
