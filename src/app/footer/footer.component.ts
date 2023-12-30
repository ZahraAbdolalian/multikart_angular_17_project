import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';;
import { SharedImports } from '../shared/shared-imports/shared.module';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    SharedImports,
    ReactiveFormsModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  iconsList = ['fa-facebook', 'fa-google-plus', 'fa-twitter', 'fa-instagram', 'fa-rss']

  categoriesList = ['Electronics', 'Jewelery', "Men's clothing", "Women's clothing"]
  chooseList = ['shipping & return', 'secure shopping', 'gallary', 'affiliates', 'contacts']
  informationsList = [
    { text: 'Multikart Demo Store, Demo Store India 345-659', icon: 'fa-map-marker' },
    { text: 'Call Us: 123-456-7898', icon: 'fa-phone' },
    { text: 'Email Us: Support@Fiot.Com', icon: 'fa-envelope-o' },
    { text: 'Fax: 123456', icon: 'fa-fax' }
  ]

  paymentCards = [
    {name : 'visa' , imgUrl : '../../../assets/images/visa.png'},
    {name : 'mastercard' ,imgUrl : '../../../assets/images/mastercard.png'},
    {name : 'paypal' ,imgUrl : '../../../assets/images/paypal.png'},
    {name : 'american-express' ,imgUrl : '../../../assets/images/american-express.png'},
    {name : 'discover' ,imgUrl : '../../../assets/images/discover.png'},
  ]
}
